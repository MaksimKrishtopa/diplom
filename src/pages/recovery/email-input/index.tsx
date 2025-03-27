import React, { ReactNode } from 'react';
import RecoveryEmailInput from '@/features/recovery/form/email-form';
import backgroundImage from '@/assets/backgroundShapes.png';
import { recoveryContainerStyle, recoveryWrapperStyle, recoveryImageStyle, recoveryFormContainerStyle } from '@/pages/recovery/style';

const EmailInputPage = (): ReactNode => {
  return (
    <div className={recoveryContainerStyle}>
      <div className={recoveryWrapperStyle}>
        <div className="mr-8">
          <img src={backgroundImage} alt="Recovery-bg" className={recoveryImageStyle} />
        </div>
        <div className={recoveryFormContainerStyle}>
          <RecoveryEmailInput />
        </div>
      </div>
    </div>
  );
};

export default EmailInputPage;