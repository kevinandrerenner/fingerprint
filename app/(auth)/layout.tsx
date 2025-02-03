import Image from "next/image";

export default function authLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="relative flex min-h-screen items-center justify-center bg-gray-100 dark:bg-black">
            {/* Glassmorphism Box */}
            <div className="backdrop-blur-lg border shadow-xl rounded-2xl w-full max-w-md min-w-96 p-10
                      bg-white/30 border-gray-300 dark:bg-black/30 dark:border-white/10">
                {/* Logo */}
                <div className="flex items-center justify-center">
                    <Image src="/logo.svg" className="mb-5 select-none pointer-events-none" alt="Logo" width={80}
                           height={80}/>
                </div>
                {children}
            </div>
        </div>
    );
}