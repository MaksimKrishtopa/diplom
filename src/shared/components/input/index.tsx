import React, { forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends React.DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    type: string;
    name: string;
    placeholder?: string;
    className: string;
    required: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ type, name, placeholder, className, required, ...rest }, ref) => {
    return (
        <label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
                className={className}
                ref={ref}
                {...rest}
            />
        </label>
    );
});

export default Input;