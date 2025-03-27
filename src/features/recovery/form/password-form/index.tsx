import React, { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/shared/components/inputs/input';
import Logo from '@/shared/components/icons/logo';
import Button from '@/shared/components/button';
import BackButton from '@/shared/components/back-button';
import styles from '@/features/recovery/form/password-form/style';

const PasswordForm = (): ReactNode => {
  const { handleSubmit, register } = useForm();

  const handleFormSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <BackButton />
        <Logo width={'179px'} height={'60px'} />
      </div>

      <div className="flex flex-col w-full">
        <h2 className={styles.title}>Новый пароль</h2>
        <p className={styles.description}>Придумайте новый пароль</p>

        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Input
            type="password"
            placeholder="Введите пароль"
            className={styles.input}
            required
            label="Пароль"
            {...register("password")}
          />
          <Input
            type="password"
            placeholder="Введите повторно пароль"
            className={styles.input}
            required
            label="Повтор пароля"
            {...register("confirm-password")}
          />
          <Button type="submit" className={styles.button}>
            Продолжить
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PasswordForm;
