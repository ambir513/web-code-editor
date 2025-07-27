/**
 *  This is public Routes can be accessible for all user
 *  @type {string[]}
 */
export const publicRoutes = ["/", "/about", "/terms-contitions", "/faqs"];

/**
 *  This is Routes are accessible only for athenticated
 *  @type {string[]}
 */
export const authRoutes = ["/auth/sign-in", "/auth/error"];

/**
 *  This prefix for API authentication routes
 *  @type {string}
 */
export const apiPrefixRoutes = "/api/auth";

/**
 *  This is a Default routes
 *  @type {string}
 */
export const DEFAULT_SIGNIN_REDIRECT = "/auth/sign-in";
