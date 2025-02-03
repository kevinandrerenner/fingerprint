"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import Link from "next/link"; // Import Next.js Link component

import { Button } from "@/components/buttons/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";

const FormSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email." }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
    rememberMe: z.boolean().default(false),
});

export function SignInForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        mode: "onChange", // Enables real-time validation
        defaultValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
    });

    const { isValid } = form.formState;
    const [showPassword, setShowPassword] = useState(false);

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
            ),
        });
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                {/* Email Field */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field, fieldState }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Email" {...field} />
                            </FormControl>
                            {fieldState.error && (
                                <FormMessage>{fieldState.error.message}</FormMessage>
                            )}
                        </FormItem>
                    )}
                />

                {/* Password Field with Show Password Toggle */}
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field, fieldState }) => (
                        <FormItem>
                            <FormControl>
                                <div className="relative">
                                    <Input
                                        className="pr-10"
                                        placeholder="Password"
                                        type={showPassword ? "text" : "password"}
                                        {...field}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </FormControl>
                            {fieldState.error && (
                                <FormMessage>{fieldState.error.message}</FormMessage>
                            )}
                        </FormItem>
                    )}
                />

                {/* Remember Me Checkbox with Forgot Password Link */}
                <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                        <FormItem>
                            <div className="flex items-center justify-between py-1">
                                <div className="flex items-center gap-2">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            className="h-4 w-4"
                                        />
                                    </FormControl>
                                    <FormLabel className="text-sm font-medium leading-none">
                                        Remember Me
                                    </FormLabel>
                                </div>
                                <Link href="/reset-password">
                  <span className="text-sm text-gradientLink hover:underline">
                    Forgot password?
                  </span>
                                </Link>
                            </div>
                        </FormItem>
                    )}
                />

                {/* Submit Button - Disabled if form is invalid */}
                <Button
                    className="w-full"
                    variant="gradientPrimary"
                    type="submit"
                    disabled={!isValid}
                >
                    Sign in
                </Button>
            </form>
        </Form>
    );
}