"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/buttons/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";

// Schema with a custom refinement to ensure the two passwords match.
const ResetYourPasswordSchema = z
    .object({
        password: z.string().min(8, "Password must be at least 8 characters"),
        confirmPassword: z.string().min(8, "Confirm Password must be at least 8 characters"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

type ResetYourPasswordFormData = z.infer<typeof ResetYourPasswordSchema>;

export function ResetYourPasswordForm() {
    const router = useRouter();
    const form = useForm<ResetYourPasswordFormData>({
        resolver: zodResolver(ResetYourPasswordSchema),
        defaultValues: { password: "", confirmPassword: "" },
        mode: "onChange", // Enables real-time validation
    });
    const { isValid } = form.formState;
    const [dialogOpen, setDialogOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const onSubmit = (data: ResetYourPasswordFormData) => {
        // TODO: Trigger your API call here to actually reset the password.
        setDialogOpen(true);
    };

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* New Password Field */}
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field, fieldState }) => (
                            <FormItem>
                                <FormControl>
                                    <div className="relative">
                                        <Input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter new password"
                                            {...field}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword((prev) => !prev)}
                                            className="absolute right-2 top-1/2 -translate-y-1/2"
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

                    {/* Confirm New Password Field */}
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field, fieldState }) => (
                            <FormItem>
                                <FormControl>
                                    <div className="relative">
                                        <Input
                                            id="confirmPassword"
                                            type={showConfirmPassword ? "text" : "password"}
                                            placeholder="Confirm new password"
                                            {...field}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword((prev) => !prev)}
                                            className="absolute right-2 top-1/2 -translate-y-1/2"
                                        >
                                            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>
                                    </div>
                                </FormControl>
                                {fieldState.error && (
                                    <FormMessage>{fieldState.error.message}</FormMessage>
                                )}
                            </FormItem>
                        )}
                    />

                    <Button
                        className="w-full"
                        variant="gradientPrimary"
                        type="submit"
                        disabled={!isValid}
                    >
                        Reset Password
                    </Button>
                </form>
            </Form>

            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Password Reset Successful</DialogTitle>
                        <DialogDescription>
                            Your password has been reset successfully.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button
                            variant="gradientPrimary"
                            onClick={() => {
                                setDialogOpen(false);
                                router.push("/sign-in");
                            }}
                        >
                            Close
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}