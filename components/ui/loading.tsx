import { Loader2 } from "lucide-react";

const Loading = () => {
    return (
        <div className="flex items-center justify-center">
            <Loader2 size="2rem" className="animate-spin" />
        </div>
    );
};

export default Loading;