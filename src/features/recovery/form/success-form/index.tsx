import React from 'react';
import Logo from '@/assets/icons/logo';
const RecoverySuccess: React.FC = () => {
  return (
    <div className="flex flex-col items-start w-[346px] h-full justify-center gap-3">
      <Logo />
      <div className="flex flex-col w-full">
        <h2 className="text-title font-extrabold text-[#040405] font-poppins mb-8">
            Пароль успешно изменён!
        </h2>
      </div>
    </div>
  );
};

export default RecoverySuccess;
