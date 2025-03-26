import React, { ReactNode } from 'react';
import PasswordForm from '@/features/recovery/form/password-form';
import backgroundImage from '@/assets/backgroundShapes.png';

const NewPasswordPage = (): ReactNode => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#D5E7FB]">
      <div className="flex background-light shadow-3xl">
        <div className="mr-8">
          <img src={backgroundImage} alt="Recovery-bg" className="w-[408px] h-[622px] object-cover rounded-xl" />
        </div>
        <div className="flex items-center justify-center">
          <PasswordForm />
        </div>
      </div>
    </div>
  );
};

export default NewPasswordPage;
