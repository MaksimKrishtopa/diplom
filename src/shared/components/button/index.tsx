import React from 'react';
import {buttonStyles} from "@/shared/components/button/style.ts";
import {makeClassname} from "@/shared/utils/functions/classname";

type IStyledButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    styleType?: 'primary' | 'secondary' | 'selective';
};

const Button = ({
                    styleType = 'primary',
                    className,
                    ...props
                }: IStyledButtonProps): React.ReactNode => {
    return (
        <button
            className={makeClassname(buttonStyles({ styleType }), className)}
            {...props}
        >
            {props.children}
        </button>
    );
};

export default Button;