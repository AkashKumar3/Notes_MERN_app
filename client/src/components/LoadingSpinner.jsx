import { Loader2 } from "lucide-react"

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>
    )
}

export default LoadingSpinner
