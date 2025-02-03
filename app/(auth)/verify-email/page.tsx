"use client";

import { EmailVerificationForm } from "@/components/forms/EmailVerificationForm";
import Link from "next/link";

export default function EmailVerificationPage() {
    return (
        <div className="w-full max-w-sm mx-auto space-y-6 p-4">
            <h1 className="text-3xl font-bold text-center">Verify Your Email</h1>
            <p className="text-center text-sm">
                A verification code has been sent to your email. Please enter the code below
                or click the link in your email to verify automatically.
            </p>
            <EmailVerificationForm />
            <p className="text-center text-sm">
                Didn’t receive the code?
                <Link href="/resend-code" className="ml-1 text-gradientLink hover:underline">
                    Resend Code
                </Link>
            </p>
        </div>
    );
}