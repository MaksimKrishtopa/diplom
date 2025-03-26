import React, { ReactNode } from 'react';
import Logo from '@/shared/components/icons/logo';

const RecoverySuccess = (): ReactNode => {
  return (
    <div className="flex flex-col items-start w-[346px] h-full justify-center gap-3">
      <Logo width={'179px'} height={'60px'} />
      <div className="flex flex-col w-full">
        <h2 className="text-title font-extrabold text-[#040405] font-poppins mb-8">
          Пароль успешно изменён!
        </h2>
      </div>
    </div>
  );
};

export default RecoverySuccess;