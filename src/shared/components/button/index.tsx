import React from 'react';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    disabled?: boolean; // Необязательный пропс
    className?: string; // Необязательный пропс
    type?: 'primary' | 'secondary' | 'danger';
}

const Button: React.FC<ButtonProps> = ({
                                           onClick,
                                           children,
                                           disabled = false,
                                           className = '',
                                           type = 'primary',}) => {

    const buttonClass = `btn btn-${type} ${className}`.trim();

    return (
        <button onClick={onClick} disabled={disabled} className={buttonClass}>
            {children}
        </button>
    );
};

export default Button;