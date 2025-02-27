import React, {forwardRef, InputHTMLAttributes} from 'react';


interface IInputProps extends React.DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    type: string;
    name: string;
    placeholder?: string;
    required: boolean;
    label: string;
}


const Input = forwardRef<HTMLInputElement, IInputProps>(({  ...rest }, ref) => {
    return (
        <label>
            <span className="text-[10px] text-sm font-medium text-[#5687BB]">{rest.label}</span>
            <input className="w-[412px] h-[50px] text-[12px] text-[#5687BB] focus:border-[#5687BB] focus:outline-none focus:text-[#5687BB] rounded-[5px] border-2 border-[#5687BB] flex justify-between pt-[5px] pr-[20px] pb-[5px] pl-[20px]"   ref={ref} {...rest}/>
        </label>
    );
});

export default Input;