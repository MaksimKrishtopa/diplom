import React from 'react';
import { makeClassname } from '@/shared/utils/functions/classname';

type StyledButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    styleType?: 'primary' | 'secondary' | 'selective';
};

const buttonStyles = {
    primary: 'bg-primary w-[346px] h-[48px] rounded-[16px] text-white-text font-roboto cursor-pointer',
    secondary: 'bg-secondary w-[346px] h-[48px] rounded-[16px] border-secondary-border text-blue-text',
    selective: 'bg-selective text-white-text font-roboto w-[205px] h-[60px] rounded-[8px] hover:bg-selective-hover hover:shadow-selective-hover active:bg-selective-active disabled:bg-selective-disable disabled:cursor-not-allowed transition-all duration-200',
};

const Button: React.FC<StyledButtonProps> = ({
                                                 styleType = 'primary',
                                                 className,
                                                 ...props
                                             }) => {
    const styleClass = buttonStyles[styleType];

    return (
        <button
            className={makeClassname(
                'py-2 px-4 rounded transition-colors duration-200',
                styleClass,
                className
            )}
            {...props}
        />
    );
};

export default Button;