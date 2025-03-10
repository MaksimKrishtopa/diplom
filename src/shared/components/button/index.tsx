import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonStyles = cva(
    'py-2 px-4 rounded transition-colors duration-200 font-roboto',
    {
        variants: {
            styleType: {
                primary: 'bg-primary w-86 h-12 rounded-2xl text-white-text cursor-pointer',
                secondary: 'bg-secondary w-86 h-12 rounded-2xl border-secondary-border border-[2px] text-blue-text',
                selective: 'bg-selective text-white-text w-52 h-[60px] rounded-lg hover:bg-selective-hover hover:shadow-selective-hover active:bg-selective-active disabled:bg-selective-disable disabled:cursor-not-allowed',
            },
        },
        defaultVariants: {
            styleType: 'primary',
        },
    }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonStyles>;

const Button: React.FC<ButtonProps> = ({
                                           styleType,
                                           className,
                                           ...props
                                       }) => {
    return (
        <button
            className={buttonStyles({ styleType, className })}
            {...props}
        ></button>
    );
};

export default Button;
