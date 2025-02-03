"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { DashboardNavbar } from "@/components/layout/DashboardNavbar";

export default function DashboardPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === "loading") {
        return <p>Loading session...</p>;
    }

    if (!session) {
        router.push("/sign-in"); // Redirect to sign-in if not logged in
        return null;
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <DashboardNavbar />
            <div className="p-6">
                <h1 className="text-3xl font-bold">Welcome, {session.user?.name}</h1>
                <p className="text-gray-500">This is your dashboard.</p>
            </div>
        </div>
    );
}