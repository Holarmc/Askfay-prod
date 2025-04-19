// Define a middleware to check if the user is authenticated
import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;

  // Define public paths that don't require authentication
  const isPublicPath =
    path === "/" ||
    path === "/signin" ||
    path === "/login" ||
    path === "/signup" ||
    path === "/auth";

  // Check if the user is authenticated
  const token = request.cookies.get("token")?.value;
  const isAuthenticated = !!token;

  if (!isPublicPath && !isAuthenticated) {
    // Redirect to login if trying to access a protected route while not authenticated
    return NextResponse.redirect(new URL("/auth", request.url));
  } else if (
    isAuthenticated &&
    (path === "/signin" ||
      path === "/login" ||
      path === "/signup" ||
      path === "/auth")
  ) {
    // Redirect to home if trying to access auth pages while already authenticated
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// Add any routes you want the middleware to run on
export const config = {
  matcher: ["/((?!/ | api | _next/static | _next/image | favicon.ico).*)"],
};
