import { ResetYourPasswordForm } from "@/components/forms/ResetPasswordForm"
import Link from "next/link";

export default function ResetYourPasswordPage() {
    return (
        <div className="w-full max-w-sm mx-auto space-y-6">
            <h1 className="text-3xl font-bold text-center">Reset Your Password</h1>
            <ResetYourPasswordForm />
            <p className="text-center text-sm">
                Back to
                <Link href="/sign-in" className="ml-1 text-gradientLink hover:underline">
                    Sign in
                </Link>
            </p>
        </div>
    );
}