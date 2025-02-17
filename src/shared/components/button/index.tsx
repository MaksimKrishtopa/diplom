import React from 'react';

enum EButtonProps {
    primary = "primary",
    secondary = "secondary",
    danger = "danger"
}

interface IButtonProps extends Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'type'> {
    type?: EButtonProps;

}

const Button = ({type = EButtonProps.primary, ...rest}):IButtonProps =>
{
    return (
        <button {...rest}>
            {rest.children}
        </button>
    );
};

export default Button;