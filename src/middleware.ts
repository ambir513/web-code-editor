import authConfig from "./auth.config";
import NextAuth from "next-auth";
import {
  apiPrefixRoutes,
  authRoutes,
  DEFAULT_SIGNIN_REDIRECT,
  publicRoutes,
} from "./routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth;

  const isPublicRoute = publicRoutes.includes(req.nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(req.nextUrl.pathname);
  const isApiPrefix = req.nextUrl.pathname.startsWith(apiPrefixRoutes);

  if (isApiPrefix) {
    return null;
  }
  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL("/dashboard", req.nextUrl));
    }
    return null;
  }
  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL(DEFAULT_SIGNIN_REDIRECT, req.nextUrl));
  }
  console.log(isLoggedIn);
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
