import React, { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/shared/components/inputs/input';
import Logo from '@/shared/components/icons/logo';
import Button from '@/shared/components/button';
import styles from '@/features/recovery/form/email-form/style';

const RecoveryEmailInput = (): ReactNode => {
  const { handleSubmit, register } = useForm();

  const handleFormSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <Logo width={'179px'} height={'60px'} />
      <div className="flex flex-col w-full">
        <h2 className={styles.title}>Забыли пароль?</h2>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Input
            type="email"
            placeholder="Введите e-mail"
            className={styles.input}
            required
            label="E-mail"
            max={255}
            {...register("email")}
          />
          <Button type="submit" className={styles.button}>
            Продолжить
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RecoveryEmailInput;