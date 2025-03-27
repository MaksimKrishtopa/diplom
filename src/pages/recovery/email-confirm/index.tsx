import React, { ReactNode } from 'react';
import RecoveryEmailConfirmation from '@/features/recovery/form/confirm-form';
import backgroundImage from '@/assets/backgroundShapes.png';
import { recoveryContainerStyle, recoveryWrapperStyle, recoveryImageStyle, recoveryFormContainerStyle } from '@/pages/recovery/style';

const EmailConfirmPage = (): ReactNode => {
  return (
    <div className={recoveryContainerStyle}>
      <div className={recoveryWrapperStyle}>
        <div className="mr-8">
          <img src={backgroundImage} alt="Recovery-bg" className={recoveryImageStyle} />
        </div>
        <div className={recoveryFormContainerStyle}>
          <RecoveryEmailConfirmation />
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmPage;