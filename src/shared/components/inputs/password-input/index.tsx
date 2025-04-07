import {forwardRef, useState} from 'react';
import IInputProps from "@/shared/interface/ui/input";
import PasswordActiveIcon from "@/shared/components/icons/password/active";
import PasswordPassiveIcon from "@/shared/components/icons/password/passive";
import Input from "@/shared/components/inputs/input";
import ErrorMessage from "@/shared/components/error-message";
import {inputGlobalStyles} from "../style.ts";
import {inputPasswordStyles} from "./style.ts";

const InputPassword = forwardRef<HTMLInputElement, Omit<IInputProps, 'type' | 'required'>>(({
                                                                     errorMessage,
                                                                     label,
                                                                     ...props
                                                                 }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword((prev) => !prev);
    return (
        <div>
            {label && <label className={inputGlobalStyles.label}>{label}</label>}
            <div className={inputPasswordStyles.inputWrap}>
                <Input
                    type={showPassword ? "text" : "password"}
                    ref={ref}
                    required
                    {...props}
                />
                <button
                    type="button"
                    onClick={toggleShowPassword}
                    className={inputPasswordStyles.passwordStyles}
                >
                    {showPassword ? <PasswordActiveIcon/> : <PasswordPassiveIcon/>}
                </button>
            </div>
            <ErrorMessage message={errorMessage}/>
        </div>
    );
});

export default InputPassword;