"use client";

// import { signIn } from "next-auth/react";
import { Button } from "@/components/buttons/button";
import { Github } from "lucide-react";

export function GitHubSignIn() {
    return (
        <Button
            // onClick={() => signIn("github")}
            className="w-full flex items-center gap-2"
        >
            <Github className="h-5 w-5" />
            Sign in with GitHub
        </Button>
    );
}