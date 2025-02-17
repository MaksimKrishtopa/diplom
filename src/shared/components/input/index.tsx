import {FC, InputHTMLAttributes} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type:string;
    name:string;
    placeholder?:string;
    className:string;
    required:boolean;
}


const Input: FC<InputProps> = ({type,name,placeholder,className,required}) => {
    return (
        <label>
            <input type={type}
                   name={name}
                   placeholder={placeholder}
                   required={required}
                   className={className}
            />
        </label>
    );
};

export default Input;