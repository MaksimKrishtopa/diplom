import React, {forwardRef, InputHTMLAttributes, useState} from 'react';
import {iconPasswordActive,iconPasswordDefault} from '../../icon/index.ts'

interface IInputProps extends React.DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    type: string;
    name: string;
    placeholder?: string;
    required: boolean;
    label: string;
}


const Input = forwardRef<HTMLInputElement, IInputProps>(({  ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false)
    const isPasswordField = rest.type === "password";
    return (
        <div className="relative">
            <input
                ref={ref} {...rest}
                type={isPasswordField && showPassword ? "text" : rest.type}
                className="w-[412px] h-[50px] font-roboto text-[12px] text-[#007BA7]
                focus:border-[#5687BB] focus:outline-none bg-[#FFFFFF] focus:text-[#007BA7] font-inherit cursor-pointer
                 rounded-[5px] border-2 border-[#5687BB] flex justify-between pt-[12px] pr-[20px] pb-[5px] pl-[15px] left-[19px] bottom-[20px]"
                required
            />
            {isPasswordField && (
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5687BB]"
                >
                    {showPassword ? <img alt="иконка пароля" src={iconPasswordActive} className="icon-password"></img> :
                        <img alt="иконка пароля" src={iconPasswordDefault}
                             className="icon-password-passiv"></img> }
                </button>
            )}
            <label
                className="cursor-pointer font-roboto block absolute left-[17px] top-[5px] text-sm font-medium text-[#5687BB] text-[10px] transition-all duration-200">
                {rest.label}
            </label>
        </div>
    );
});

export default Input;