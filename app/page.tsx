import { Footer } from "@/components/layout/footer";
import { HomeButtons } from "@/components/buttons/home-buttons"; // New component

export default function HomePage() {
    return (
        <div className="space-y-3 flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
            <h1 className="text-4xl font-bold">Welcome to Fingerprint</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400">
                Secure authentication made easy.
            </p>

            {/* Client-side buttons */}
            <HomeButtons />

            {/* Footer Component */}
            <Footer />
        </div>
    );
}