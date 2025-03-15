import React from 'react';
import Input from '@/shared/components/input';
import Logo from '@/assets/logo.svg';
import Button from '@/shared/components/button';


const RecoveryEmailInput: React.FC = () => {
    return (
        <div className="flex flex-col items-start w-[346px] h-full justify-between">
            <img src={Logo} alt="Logo"/>
            <div className="flex flex-col w-full">
                <h2 className="text-title font-extrabold text-[#040405] font-poppins mb-8">
                    Забыли пароль?
                </h2>
                <Input 
                    type="email" 
                    name="email"
                    placeholder="Введите e-mail"
                    className="input w-[346px] mb-8"
                    required
                    label='E-mail'
                    max={255}
                />
                <Button 
                    type="primary"
                    className="h-12 bg-primary text-white rounded-xl py-3 text-center cursor-pointer"
                >
                    Продолжить
                </Button>
            </div>
        </div>
    );
};

export default RecoveryEmailInput;

