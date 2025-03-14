import React from 'react';
import logo from '@/assets/logo.svg'


const LogoForm:React.FC = () => {
    return (
        <div className="flex flex-col gap-40 items-start">
            <img alt="фон" src={logo}></img>
            <h4 className="justify-center font-bold text-title tracking-normal">
                Вход в систему
            </h4>
        </div>
    );
};

export default LogoForm;