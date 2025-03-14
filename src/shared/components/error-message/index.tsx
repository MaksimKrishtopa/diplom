import {ErrorMessageProps} from "@/shared/interface/user/validation";
import React from "react";

const ErrorMessage: React.FC<ErrorMessageProps> = ({message, className}) => {
    if (!message) return null;

    return (
        <span className={`text-error ${className}`}>
            {message}
        </span>
    );
};

export default ErrorMessage;