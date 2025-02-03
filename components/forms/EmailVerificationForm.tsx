"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Button } from "@/components/buttons/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";

// Define a schema for the OTP verification (6 digits required)
const VerificationSchema = z.object({
    otp: z.string().length(6, "Please enter a 6-digit code"),
});

type VerificationFormData = z.infer<typeof VerificationSchema>;

export function EmailVerificationForm() {
    const router = useRouter();
    const form = useForm<VerificationFormData>({
        resolver: zodResolver(VerificationSchema),
        defaultValues: { otp: "" },
        mode: "onChange", // Enables real-time validation
    });

    const { isValid } = form.formState;
    const [dialogOpen, setDialogOpen] = useState(false);

    const onSubmit = (data: VerificationFormData) => {
        // TODO: Implement your OTP verification logic (e.g., API call)
        console.log("OTP Entered:", data.otp);
        setDialogOpen(true);
    };

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="otp"
                        render={({ field, fieldState }) => (
                            <FormItem className="flex flex-col items-center"> {/* Centers content */}
                                <FormControl>
                                    <div className="flex justify-center"> {/* Centers OTP input */}
                                        <InputOTP maxLength={6} value={field.value} onChange={field.onChange}>
                                            <InputOTPGroup>
                                                {Array.from({ length: 6 }).map((_, index) => (
                                                    <InputOTPSlot key={index} index={index} />
                                                ))}
                                            </InputOTPGroup>
                                        </InputOTP>
                                    </div>
                                </FormControl>
                                {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        className="w-full"
                        variant="gradientPrimary"
                        disabled={!isValid}
                    >
                        Verify
                    </Button>
                </form>
            </Form>

            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Verification Successful</DialogTitle>
                        <DialogDescription>
                            Your email has been verified successfully.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button
                            variant="gradientPrimary"
                            onClick={() => router.push("/sign-in")}
                        >
                            Continue
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}