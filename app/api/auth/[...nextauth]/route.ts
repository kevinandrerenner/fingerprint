import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
    ],
    pages: {
        signIn: "/sign-in",
        error: "/sign-in", // Redirect errors back to sign-in page
    },
    callbacks: {
        async session({ session }) {
            console.log("Session created:", session);
            return session;
        },
        async redirect({ url, baseUrl }) {
            console.log("Redirecting to:", url);
            return baseUrl + "/dashboard"; // ✅ Redirect after successful login
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: true,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };