import React, {forwardRef, InputHTMLAttributes} from 'react';


interface IInputProps extends React.DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    type: string;
    name: string;
    placeholder?: string;
    className: string;
    required: boolean;
    label: string;
}


const Input = forwardRef<HTMLInputElement, IInputProps>(({  ...rest }, ref) => {
    return (
        <label>
            {rest.label}
            <input ref={ref} {...rest}/>
        </label>
    );
});

export default Input;