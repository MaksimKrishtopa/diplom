import React, { ReactNode } from 'react';
import PasswordForm from '@/features/recovery/form/password-form';
import backgroundImage from '@/assets/backgroundShapes.png';
import { recoveryContainerStyle, recoveryWrapperStyle, recoveryImageStyle, recoveryFormContainerStyle } from '@/pages/recovery/style';

const NewPasswordPage = (): ReactNode => {
  return (
    <div className={recoveryContainerStyle}>
      <div className={recoveryWrapperStyle}>
        <div className="mr-8">
          <img src={backgroundImage} alt="Recovery-bg" className={recoveryImageStyle} />
        </div>
        <div className={recoveryFormContainerStyle}>
          <PasswordForm />
        </div>
      </div>
    </div>
  );
};

export default NewPasswordPage;
