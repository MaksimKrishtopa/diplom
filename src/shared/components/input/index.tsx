import React, {forwardRef, InputHTMLAttributes, useState} from 'react';
import {iconPasswordActive, iconPasswordDefault} from "@/shared/icon";


interface IInputProps extends React.DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    type: string;
    name?: string;
    placeholder?: string;
    required: boolean;
    label: string;
}


const Input = forwardRef<HTMLInputElement, IInputProps>(({...rest}, ref) => {
    const [showPassword, setShowPassword] = useState(false)
    const toggleShowPassword = () => setShowPassword((showPassword) => !showPassword);
    const isPasswordField = rest.type === "password";
    return (
        <div className="relative">
            <input
                ref={ref} {...rest}
                type={isPasswordField && showPassword ? "text" : rest.type}
                className='input font-roboto font-inherit'
                required
            />
            {isPasswordField && (
                <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5687BB]"
                >
                    {showPassword ? <img alt="иконка пароля" src={iconPasswordActive} className="icon-password"></img> :
                        <img alt="иконка пароля" src={iconPasswordDefault}
                             className="icon-password-passiv"></img>}
                </button>
            )}
            <label
                className="custom-label cursor-pointer font-roboto">
                {rest.label}
            </label>
        </div>
    );
});

export default Input;