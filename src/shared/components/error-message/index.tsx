
import {ReactNode} from "react";
import clsx from "clsx";
import {messageError} from "@/shared/components/error-message/style.ts";
import {ErrorMessageProps} from "@/shared/interface/ui/validation";

const ErrorMessage = ({ message, className }: ErrorMessageProps): ReactNode => {
    if (!message) return null;

    return (
        <span className={clsx(messageError.textError, className)}>
            {message}
        </span>
    );
};

export default ErrorMessage;