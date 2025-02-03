"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
    FormField,
    FormItem,
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

const ResetPasswordSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
});

type ResetPasswordFormData = z.infer<typeof ResetPasswordSchema>;

export function ResetPasswordRequestForm() {
    const form = useForm<ResetPasswordFormData>({
        resolver: zodResolver(ResetPasswordSchema),
        mode: "onChange",
        defaultValues: { email: "" },
    });

    // Destructure isValid from formState; it will be false when the email is empty or invalid.
    const { isValid } = form.formState;
    const [dialogOpen, setDialogOpen] = useState(false);
    const [submittedEmail, setSubmittedEmail] = useState("");

    function onSubmit(data: ResetPasswordFormData) {
        setSubmittedEmail(data.email);
        setDialogOpen(true);
        // TODO: Trigger your API call here to send the reset email.
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field, fieldState }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Enter your email" {...field} />
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
                    disabled={!isValid}  // Button is disabled until the email input is valid.
                >
                    Send Reset Link
                </Button>
            </form>

            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Email Sent</DialogTitle>
                        <DialogDescription>
                            A password reset email has been sent to{" "}
                            <strong>{submittedEmail}</strong>. Please check your inbox and follow
                            the instructions.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="gradientPrimary" onClick={() => setDialogOpen(false)}>
                            Close
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </Form>
    );
}