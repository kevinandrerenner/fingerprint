"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/buttons/button";

export default function DashboardPage() {
    const router = useRouter();

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
            <h1 className="text-4xl font-bold">Welcome to Your Dashboard</h1>
            <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
                This is a placeholder for your future dashboard.
            </p>

            <div className="mt-6 flex space-x-4">
                <Button variant="gradientPrimary" onClick={() => router.push("/")}>
                    Go to Home
                </Button>
                <Button variant="outline" onClick={() => router.push("/sign-out")}>
                    Sign Out
                </Button>
            </div>
        </div>
    );
}