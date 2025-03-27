import React, { ReactNode } from 'react';
import Logo from '@/shared/components/icons/logo';
import styles from '@/features/recovery/form/success-form/style';

const RecoverySuccess = (): ReactNode => {
  return (
    <div className={styles.container}>
      <Logo width={'179px'} height={'60px'} />
      <div className="flex flex-col w-full">
        <h2 className={styles.header}>Пароль успешно изменён!</h2>
      </div>
    </div>
  );
};

export default RecoverySuccess;