import {ErrorMessageProps} from "@/shared/lib/validation/user";
import React from "react";

const ErrorMessage: React.FC<ErrorMessageProps> = ({message, className}) => {
    if (!message) return null;

    return (
        <span className={`text-warning ${className}`}>
            {message}
        </span>
    );
};

export default ErrorMessage;