import {GitHubSignIn} from "@/components/buttons/GitHubSignIn";
import {Separator} from "@/components/ui/separator";
import {SignInForm} from "@/components/forms/SignInForm";
import Link from "next/link";

export default function Page() {

    return (
        <div className="w-full max-w-sm mx-auto space-y-6">
            <h1 className="text-3xl font-bold text-center">Sign in</h1>

            {/* GitHub OAuth Login */}
            <GitHubSignIn />

            {/* Divider */}
            <div className="relative flex items-center space-x-2">
                <Separator className="flex-1 bg-gray-300 dark:bg-gray-600" />
                <span className="text-sm text-gray-500 dark:text-gray-400">or continue with email</span>
                <Separator className="flex-1 bg-gray-300 dark:bg-gray-600" />
            </div>

            {/* Sign In Form */}
            <SignInForm />

            {/* Signup Redirect */}
            <p className="text-center text-sm">
                Don&apos;t have an account?
                <Link href="/sign-up" className="ml-1 text-gradientLink hover:underline">
                    Sign up
                </Link>
            </p>

        </div>
    );
}