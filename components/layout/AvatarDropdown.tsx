"use client";

import { useSession, signOut } from "next-auth/react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { User, Settings, LogOut, Sun } from "lucide-react";

export function AvatarDropdown() {
    const { data: session } = useSession();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                    <AvatarImage src={session?.user?.image ?? ""} alt="Profile" />
                    <AvatarFallback>{session?.user?.name?.charAt(0) ?? "U"}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                {/* Profile & Settings */}
                <DropdownMenuItem disabled>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />

                {/* Theme Toggle as a Sub-menu */}
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <Sun className="mr-2 h-4 w-4" />
                        Theme
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                        <ThemeToggle />
                    </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuSeparator />

                {/* Logout */}
                <DropdownMenuItem className="text-red-500" onClick={() => signOut()}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}