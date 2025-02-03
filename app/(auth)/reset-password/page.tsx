import { ResetPasswordRequestForm } from "@/components/forms/ResetPasswordRequestForm";
import Link from "next/link";

export default function ResetPasswordPage() {
    return (
        <div className="w-full max-w-sm mx-auto space-y-6">
            <h1 className="text-3xl font-bold text-center">Reset Password</h1>
            <ResetPasswordRequestForm />
            <p className="text-center text-sm">
                Remembered your password?
                <Link href="/sign-in" className="ml-1 text-gradientLink hover:underline">
                    Sign in
                </Link>
            </p>
        </div>
    );
}