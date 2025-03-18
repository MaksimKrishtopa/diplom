import {DetailedHTMLProps, forwardRef, InputHTMLAttributes} from 'react';
import {makeClassname} from "@/shared/utils/functions/classname";
import {containerPasswordStyles,inputS, labelPasswordStyles} from "@/shared/components/inputs/style.ts";



interface IInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string;
    error?: boolean;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(({ error, label, className, ...props }, ref) => {
    return (
        <div className={containerPasswordStyles()}>
            {label && <label className={labelPasswordStyles()}>{label}</label>}
            <input
                ref={ref}
                {...props}
                className={makeClassname(inputS.input, className)}
            />
        </div>
    );
});

export default Input;