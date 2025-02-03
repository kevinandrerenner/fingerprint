"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/buttons/button";
import { FaGithub } from "react-icons/fa";

export function GitHubSignIn() {
    return (
        <Button
            onClick={() => signIn("github")}
            className="w-full flex items-center gap-2"
        >
            <FaGithub />
            <span>Sign in with GitHub</span>
        </Button>
    );
}