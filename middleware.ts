import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const adminToken = request.cookies.get("adminToken");
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");
  const isLoginPage = request.nextUrl.pathname === "/admin/login";

  // If trying to access admin routes without being logged in
  if (isAdminRoute && !adminToken && !isLoginPage) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  // If trying to access login page while already logged in
  if (isLoginPage && adminToken) {
    return NextResponse.redirect(new URL("/admin/packages", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
}; 