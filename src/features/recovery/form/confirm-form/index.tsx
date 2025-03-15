import React from 'react';
import Input from '@/shared/components/input';
import Logo from '@/assets/logo.svg';
import Back from '@/assets/back-arrow.svg'
import Button from '@/shared/components/button';
import { useNavigate } from 'react-router-dom';
import ERouterPath from '@/shared/common/enum/router';


const RecoveryEmailConfirmation: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-start w-[346px] h-full justify-between">
            <div>
            <button onClick={() => navigate(ERouterPath.RECOVERY)}  className="flex items-center text-blue-500 text-sm font-medium mb-6 cursor-pointer">
                <img src={Back} alt="Back" className="mr-2" />
                Вернуться назад
            </button>
            <img src={Logo} alt="Logo"/>
            </div>

            <div className="flex flex-col w-full">
                <h2 className="text-title font-extrabold text-[#040405] font-poppins mb-3">
                    Подтверждение кода
                </h2>
                <p className="text-[#040405]-normal mb-8">Введите код из письма</p>
                <div className="flex justify-between mb-8 gap-2">
                    {[...Array(6)].map((_, i) => (
                        <Input
                            key={i}
                            type="text"
                            name={`code-${i}`}
                            placeholder=""
                            className="w-12 h-12 text-center border-2 rounded-xl bg-[#FAFAFA] border-[#D1D1D1] focus:border-input-border-active focus:outline-none hover:border-input-border-active"
                            required
                            label=""
                        />
                    ))}
                </div>
                <Button 
                    type="primary"
                    className="h-12 bg-primary text-white rounded-xl py-3 text-center cursor-pointer"> 
                    Отправить
                </Button>
                <button className="text-blue-500 mt-4 cursor-pointer">
                    Отправить код повторно
                </button>
            </div>
        </div>
    );

};

export default RecoveryEmailConfirmation