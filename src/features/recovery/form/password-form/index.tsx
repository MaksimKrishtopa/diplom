import React from 'react';
import Input from '@/shared/components/input';
import Logo from '@/assets/logo.svg';
import Back from '@/assets/back-arrow.svg';
import Button from '@/shared/components/button';
import { useNavigate } from 'react-router-dom';
import ERouterPath from '@/shared/common/enum/router';

const PasswordForm: React.FC = () => {
    const navigate = useNavigate();
    
    return (
        <div className="flex flex-col items-start w-[346px] h-full justify-between">
            <div>
                <button onClick={() => navigate(ERouterPath.RECOVERY_CONFIRMATION)} className="flex items-center text-blue-500 text-sm font-medium mb-6 cursor-pointer">
                    <img src={Back} alt="Back" className="mr-2" />
                    Вернуться назад
                </button>
                <img src={Logo} alt="Logo" />
            </div>

            <div className="flex flex-col w-full">
                <h2 className="text-title font-extrabold text-[#040405] font-poppins mb-3">
                    Новый пароль
                </h2>
                <p className="text-[#040405]-normal mb-3">Придумайте новый пароль</p>
                
                <Input
                    type="password"
                    name="password"
                    placeholder="Введите пароль"
                    className="input w-[346px] mb-4 border-2 rounded-xl bg-[#FAFAFA] border-[#D1D1D1] focus:border-input-border-active focus:outline-none hover:border-input-border-active"
                    required
                    label="Пароль"
                />
                
                <Input
                    type="password"
                    name="confirm-password"
                    placeholder="Введите повторно пароль"
                    className="input w-[346px] mb-8 border-2 rounded-xl bg-[#FAFAFA] border-[#D1D1D1] focus:border-input-border-active focus:outline-none hover:border-input-border-active"
                    required
                    label="Повтор пароля"
                />
                
                <Button 
                    type="primary"
                    className="h-12 bg-primary text-white rounded-xl py-3 text-center cursor-pointer">
                    Продолжить
                </Button>
            </div>
        </div>
    );
};

export default PasswordForm;
