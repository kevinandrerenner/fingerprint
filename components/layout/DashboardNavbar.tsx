"use client";

import { AvatarDropdown } from "@/components/layout/AvatarDropdown";

export function DashboardNavbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 border-b bg-background">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <AvatarDropdown /> {/* ✅ Correct component */}
        </nav>
    );
}