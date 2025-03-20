import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';
import {buttonStyles} from "@/shared/components/button/style.ts";
import {makeClassname} from "@/shared/utils/functions/classname";
import {VariantProps} from "class-variance-authority";

type IStyledButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    & VariantProps<typeof buttonStyles>

const Button = ({
                    variant,
                    className,
                    children,
                }: IStyledButtonProps): ReactNode => {
    return (
        <button className={makeClassname(buttonStyles({variant}), className)} >
            {children}
        </button>
    );
};

export default Button;