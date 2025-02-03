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
        signIn: "/sign-in", // Redirects to your custom sign-in page
    },
    secret: process.env.NEXTAUTH_SECRET, // Make sure this is set in .env.local
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };