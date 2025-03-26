import {forwardRef} from 'react';
import {makeClassname} from "@/shared/utils/functions/classname";
import {input, inputStyles,} from "@/shared/components/inputs/style.ts";
import IInputProps from "@/shared/interface/ui/input";


const Input = forwardRef<HTMLInputElement, IInputProps>(({error, label, className, ...props}, ref) => {
    return (
        <div className={input.containerPasswordStyles}>
            {label && <label className={input.labelPasswordStyles}>{label}</label>}
            <input
                ref={ref}
                {...props}
                className={makeClassname(inputStyles({error}), className)}
            />
        </div>
    );
});

export default Input;
