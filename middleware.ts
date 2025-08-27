import { authMiddleware } from "@descope/nextjs-sdk/server";

export default authMiddleware({
  projectId: process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID!,
  redirectUrl: "/auth",
  publicRoutes: ["/", "/auth"],
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
