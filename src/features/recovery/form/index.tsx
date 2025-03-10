import React from 'react';
import Input from '@/shared/components/input';
import Button from '@/shared/components/button';
import Logo from '@/assets/logo.svg';

const RecoveryForm: React.FC = () => {
    return (
        <div className="flex flex-col items-start w-[346px] h-full justify-between">
            <img src={Logo} alt="Logo" />
            <div className="flex flex-col w-full">
                <h2 className="text-[28px] font-extrabold text-[#040405] font-poppins mb-[32px]">
                    Забыли пароль?
                </h2>
                <Input 
                    type="email" 
                    name="email" 
                    placeholder="Введите e-mail" 
                    className="w-[346px] h-[48px] bg-[#FAFAFA] border-2 border-[#D1D1D1] rounded-[16px] px-[16px] py-[12px] mb-[32px]" 
                    required 
                    label='E-mail'
                    max={255}
                />
                <Button 
                    type="primary" 
                    className="h-[48px] bg-[#5687BB] text-white rounded-[16px] py-[12px] text-center cursor-pointer"
                >
                    Продолжить
                </Button>
            </div>
        </div>
    );
};

export default RecoveryForm;
