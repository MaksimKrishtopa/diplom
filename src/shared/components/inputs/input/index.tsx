import {forwardRef} from 'react';
import {makeClassname} from "@/shared/utils/functions/classname";
import IInputProps from "@/shared/interface/ui/input";
import ErrorMessage from "@/shared/components/error-message";
import {inputStyles} from "./style.ts";
import {inputGlobalStyles} from "../style.ts";

const Input = forwardRef<HTMLInputElement, IInputProps>(({error, errorMessage, label, className, ...props}, ref) => {
    return (
        <div>
            {label && <label className={inputGlobalStyles.label}>{label}</label>}
            <input
                ref={ref}
                {...props}
                className={makeClassname(inputStyles({error}), className)}
            />
            <ErrorMessage message={errorMessage}/>
        </div>
    );
});

export default Input;