import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("authToken");
  
  if (!token && pathname.startsWith("/home")) {
    return NextResponse.redirect(new URL("/login", request.url)); // إعادة التوجيه
  }

  return NextResponse.next(); // السماح بالمرور
}

export const config = {
  matcher: ["/((?!login|register|api).*)"],
};
