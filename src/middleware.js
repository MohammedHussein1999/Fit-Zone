import { NextResponse } from "next/server";
import { auth } from "./auth";
import { login, POTECTED_ROUTE, PUBLIC_ROUTE, ROOT } from "./lib/routes";

export const middleware = async ({ nextUrl }) => {
  console.log(nextUrl.pathname ,"pathename")
  const session = await auth();
  const isAuth = !!session?.user;
  const isPublice =
    PUBLIC_ROUTE.find((route) => nextUrl.pathname.startsWith(route)) ||
    (nextUrl.pathname === ROOT &&
      !POTECTED_ROUTE.find((route) => nextUrl.pathname.includes(route)));

  if (!isAuth && !isPublice) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  } 
};

export const config = {
  // matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)", "/home"],
  matcher: ["/home"],
};
