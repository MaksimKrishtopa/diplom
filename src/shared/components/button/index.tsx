import React from 'react';

interface ButtonProps extends Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'type'> {
    type?: 'primary' | 'secondary' | 'danger';
}

const Button: React.FC<ButtonProps> = ({
                                           onClick,
                                           children,
                                           disabled = false,
                                       }) => {

    return (
        <button onClick={onClick} disabled={disabled} className={''}>
            {children}
        </button>
    );
};

export default Button;