const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <svg
                className="animate-spin h-16 w-16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="url(#gradient)" // Apply gradient to the stroke
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8b5cf6">
                            <animate
                                attributeName="offset"
                                values="0;1;0"
                                dur="2s"
                                repeatCount="indefinite"
                            />
                        </stop>
                        <stop offset="100%" stopColor="#3b82f6">
                            <animate
                                attributeName="offset"
                                values="1;0;1"
                                dur="2s"
                                repeatCount="indefinite"
                            />
                        </stop>
                    </linearGradient>
                </defs>

                {/* Exact Loader2 path from Lucide React */}
                <path
                    d="M21 12a9 9 0 1 1-6.219-8.56"
                />
            </svg>
        </div>
    );
};

export default Loading;