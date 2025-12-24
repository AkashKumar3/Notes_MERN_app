import React from "react";
import { AlertCircle } from "lucide-react";

const ErrorMessage = ({ message }) => {
    if (!message) return (
        console.log('hhhhhh')
    );

    return (
        <div className="flex items-center gap-2 rounded-md border border-red-500 bg-red-50 px-4 py-2 text-red-700 mb-10">
            <AlertCircle className="h-5 w-5" />
            <span>{message}</span>
        </div>
    );
};

export default ErrorMessage;
