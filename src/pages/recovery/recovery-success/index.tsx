import React, { ReactNode } from 'react';
import RecoverySuccess from '@/features/recovery/form/success-form';
import backgroundImage from '@/assets/backgroundShapes.png';
import { recoveryContainerStyle, recoveryWrapperStyle, recoveryImageStyle, recoveryFormContainerStyle } from '@/pages/recovery/style';

const RecoverySuccessPage = (): ReactNode => {
  return (
    <div className={recoveryContainerStyle}>
      <div className={recoveryWrapperStyle}>
        <div className="mr-8">
          <img src={backgroundImage} alt="Recovery-bg" className={recoveryImageStyle} />
        </div>
        <div className={recoveryFormContainerStyle}>
          <RecoverySuccess />
        </div>
      </div>
    </div>
  );
};

export default RecoverySuccessPage;
