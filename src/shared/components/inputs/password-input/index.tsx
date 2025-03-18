import {DetailedHTMLProps, forwardRef, InputHTMLAttributes, useState} from 'react';
import IconPasswordActive from "@/shared/components/icons/password/active";
import IconPasswordPassive from "@/shared/components/icons/password/passive";
import {makeClassname} from "@/shared/utils/functions/classname";
import {buttonPasswordStyles} from "@/shared/components/inputs/password-input/style.ts";
import {containerPasswordStyles, inputS,  labelPasswordStyles} from "@/shared/components/inputs/style.ts";


interface IInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string;
    error?: boolean;
}


const InputPassword = forwardRef<HTMLInputElement, IInputProps>(({error, label, className, ...props}, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword((prev) => !prev);
    return (
        <div className={containerPasswordStyles()}>
            {label && <label className={labelPasswordStyles()}>{label}</label>}
            <input
                ref={ref} {...props}
                type={showPassword ? "text" : "password"}
                className={makeClassname(inputS.input, className)}
                required
            />
            <button
                type="button"
                onClick={toggleShowPassword}
                className={buttonPasswordStyles()}
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