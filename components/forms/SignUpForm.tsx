"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

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
import Link from "next/link";

// Define the schema with validations.
const FormSchema = z.object({
    username: z.string().min(4, {
        message: "Username must be at least 4 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
    terms: z.boolean().refine((val) => val, {
        message: "You must accept the terms and conditions.",
    }),
});

export function SignUpForm() {
    // Make sure to provide default values for every field.
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        mode: "onChange",
        defaultValues: {
            username: "",
            email: "",
            password: "",
            terms: false,
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
                {/* Username Field */}
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field, fieldState }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Name" {...field} />
                            </FormControl>
                            {fieldState.error && (
                                <FormMessage>{fieldState.error.message}</FormMessage>
                            )}
                        </FormItem>
                    )}
                />

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

                {/* Terms Checkbox */}
                <FormField
                    control={form.control}
                    name="terms"
                    render={({ field, fieldState }) => (
                        <FormItem>
                            <div className="flex items-center gap-2 py-1">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value ?? false} // Ensures a boolean value
                                        onCheckedChange={field.onChange}
                                        className="h-4 w-4"
                                    />
                                </FormControl>
                                <FormLabel>I accept the   <Link href="/terms">
                  <span className="text-sm text-gradientLink hover:underline">
                    terms an conditions
                  </span>
                                </Link></FormLabel>
                            </div>
                            {fieldState.error && (
                                <FormMessage>{fieldState.error.message}</FormMessage>
                            )}
                        </FormItem>
                    )}
                />

                {/* Submit Button */}
                <Button
                    className="w-full"
                    variant="gradientPrimary"
                    type="submit"
                    disabled={!isValid}
                >
                    Sign up
                </Button>
            </form>
        </Form>
    );
}