export function Footer() {
    return (
        <footer className="absolute bottom-4 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>
                © {new Date().getFullYear()} Fingerprint. All rights reserved.
            </p>
        </footer>
    );
}