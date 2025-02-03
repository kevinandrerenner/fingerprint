"use client"; // This component is now client-side

import { Button } from "@/components/buttons/button";
import { useRouter } from "next/navigation";

export function HomeButtons() {
    const router = useRouter();

    return (
        <div className="flex space-x-3 pt-1">
            <Button variant="gradientPrimary" onClick={() => router.push("/sign-in")}>
                Sign In
            </Button>
            <Button variant="outline" onClick={() => router.push("/sign-up")}>
                Sign Up
            </Button>
            <Button variant="ghost" onClick={() => router.push("/dashboard")}>
                Dashboard
            </Button>
        </div>
    );
}