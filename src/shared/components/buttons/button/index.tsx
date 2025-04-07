import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';
import {makeClassname} from "@/shared/utils/functions/classname";
import {VariantProps} from "class-variance-authority";
import {buttonStyles} from "@/shared/components/buttons/button/style.ts";

type IStyledButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    & VariantProps<typeof buttonStyles>

const Button = ({
                    variant,
                    className,
                    children,
                    ...props
                }: IStyledButtonProps): ReactNode => {
    return (
        <button className={makeClassname(buttonStyles({variant}), className)} {...props}>
            {children}
        </button>
    );
};

export default Button;
