import React, {forwardRef, InputHTMLAttributes, useState} from 'react';
import {iconPasswordActive, iconPasswordDefault} from "@/shared/icon";


interface IInputProps extends React.DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    type: string;
    name?: string;
    placeholder?: string;
    required: boolean;
    label: string;
}


const Input = forwardRef<HTMLInputElement, IInputProps>(({...props}, ref) => {
    const [showPassword, setShowPassword] = useState(false)
    const toggleShowPassword = () => setShowPassword((showPassword) => !showPassword);
    const isPasswordField = props.type === "password";
    return (
        <div className="relative">
            <label
                className="cursor-pointer font-roboto ">
                {props.label}
            </label>
            <input
                ref={ref} {...props}
                type={isPasswordField && showPassword ? "text" : props.type}
                className='input font-roboto font-normal'
                required
            />
            {isPasswordField && (
                <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute right-3.5 top-1/2 transform -translate-y-1/2.5 text-blue-text"
                >
                    {showPassword ? <img alt="иконка пароля" src={iconPasswordActive} className="icon-password"></img> :
                        <img alt="иконка пароля" src={iconPasswordDefault}
                             className="icon-password-passiv"></img>}
                </button>
            )}
        </div>
    );
});

export default Input;