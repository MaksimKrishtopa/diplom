import {DetailedHTMLProps, InputHTMLAttributes} from "react";
interface IInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string;
    error?: boolean;
}
export default IInputProps