import {ReactNode} from "react";
import {messageError} from "@/shared/components/error-message/style.ts";
import {IErrorMessageProps} from "@/shared/interface/ui/error-message";
import {makeClassname} from "@/shared/utils/functions/classname";

const ErrorMessage = ({ message, className }: IErrorMessageProps): ReactNode => {
    if (!message) return null;

    return (
        <span className={makeClassname(messageError.textError, className)}>
            {message}
        </span>
    );
};

export default ErrorMessage;