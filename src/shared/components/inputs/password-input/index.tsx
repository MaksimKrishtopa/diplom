import {forwardRef, useState} from 'react';
import IconPasswordActive from "@/shared/components/icons/password/active";
import IconPasswordPassive from "@/shared/components/icons/password/passive";
import {makeClassname} from "@/shared/utils/functions/classname";
import {buttonPasswordStyles} from "@/shared/components/inputs/password-input/style.ts";
import {input, inputStyles} from "@/shared/components/inputs/style.ts";
import IInputProps from "@/shared/interface/ui/input";


const InputPassword = forwardRef<HTMLInputElement, IInputProps>(({error, label, className, ...props}, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword((prev) => !prev);
    return (
        <div className={input.containerPasswordStyles}>
            {label && <label className={input.labelPasswordStyles}>{label}</label>}
            <input
                ref={ref} {...props}
                type={showPassword ? "text" : "password"}
                className={makeClassname(inputStyles({error}), className)}
                required
            />
            <button
                type="button"
                onClick={toggleShowPassword}
                className={buttonPasswordStyles.PasswordStyles}
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