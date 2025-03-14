import React, {forwardRef, InputHTMLAttributes, useState} from 'react';
import IconPasswordActive from "@/shared/components/icons/password/active";
import IconPasswordPassive from "@/shared/components/icons/password/passive";
import {makeClassname} from "@/shared/utils/functions/classname";
import {inputPasswordStyles} from "@/shared/components/password-input/style.ts";


interface IInputProps extends React.DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string;
    error?: boolean;
}


const InputPassword = forwardRef<HTMLInputElement, IInputProps>(({error, label, className, ...props}, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword((prev) => !prev);
    return (
        <div className="relative">
            {label && <label className="cursor-pointer font-roboto">{label}</label>}
            <input
                ref={ref} {...props}
                type={showPassword ? "text" : "password"}
                className={makeClassname(inputPasswordStyles({ error }), className)}
                required
            />
            <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute right-3.5 top-1/2 transform -translate-y-1/2.5 text-blue-text"
            >
                {showPassword ? (
                    <IconPasswordActive width="24" height="24"/>
                ) : (
                    <IconPasswordPassive width="24" height="24"/>
                )}
            </button>
        </div>
    );
});

export default InputPassword;