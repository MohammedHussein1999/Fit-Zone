// middleware.js
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// Define protected and public routes
const protectedRoutes = ["/dashboard"];
const publicPaths = ["/login", "/register"];

export function middleware(request) {
  const { cookies } = request;
  const token = cookies.token;
console.log(request)
  const url = request.nextUrl.clone();

  // Protecting Routes
  if (
    protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
  ) {
    if (!token) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }

    try {
      jwt.verify(token, process.env.JWT_SECRET);
      return NextResponse.next();
    } catch (error) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }

  // Prevent authenticated users from accessing login/register
  if (publicPaths.some((path) => request.nextUrl.pathname === path)) {
    if (token) {
      try {
        jwt.verify(token, process.env.JWT_SECRET);
        url.pathname = "/dashboard";
        return NextResponse.redirect(url);
      } catch (error) {
        // Invalid token, proceed to public page
      }
    }
  }

  // Allow all other requests
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/login", "/register", "/protected/:path*"],
};
