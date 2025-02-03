"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { useEffect, useState } from "react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
    const { 
        setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null; // Prevent hydration mismatch

    return (
        <>
            <DropdownMenuItem onClick={() => setTheme("light")}>
                <Sun className="h-4 w-4 mr-2" />
                Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
                <Moon className="h-4 w-4 mr-2" />
                Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
                <Monitor className="h-4 w-4 mr-2" />
                System
            </DropdownMenuItem>
        </>
    );
}