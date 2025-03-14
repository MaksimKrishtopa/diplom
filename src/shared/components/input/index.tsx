import React, { forwardRef, InputHTMLAttributes } from 'react';
import {makeClassname} from "@/shared/utils/functions/classname";
import {inputStyles} from "@/shared/components/input/style.ts";

interface IInputProps extends React.DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string;
    error?: boolean;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(({ error, label, className, ...props }, ref) => {
    return (
        <div className="relative">
            {label && <label className="cursor-pointer font-roboto">{label}</label>}
            <input
                ref={ref}
                {...props}
                className={makeClassname(inputStyles({ error }), className)}
            />
        </div>
    );
});

export default Input;