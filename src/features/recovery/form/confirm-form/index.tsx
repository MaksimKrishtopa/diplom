import React, { ReactNode, useMemo, useRef } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/shared/components/inputs/input';
import Logo from '@/shared/components/icons/logo';
import Button from '@/shared/components/button';
import BackButton from '@/shared/components/back-button';
import { debounce } from 'lodash';
import styles from '@/features/recovery/form/confirm-form/style';

const RecoveryEmailConfirmation = (): ReactNode => {
  const { handleSubmit, register, setValue } = useForm();
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const debouncedSetValue = useMemo(
    () => debounce((name: string, value: string) => setValue(name, value), 300),
    [setValue]
  );

  const handleFormSubmit = (data: any) => {
    console.log(data);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    if (/^\d$/.test(value)) {
      debouncedSetValue(`code-${index}`, value);
      if (index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    } else {
      e.target.value = '';
    }
  };

  return (
    <div className={styles.recoveryContainer}>
      <div>
        <BackButton />
        <Logo width={'179px'} height={'60px'} />
      </div>

      <div className="flex flex-col w-full">
        <h2 className={styles.recoveryTitle}>Подтверждение кода</h2>
        <p className={styles.recoveryDescription}>Введите код из письма</p>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className={styles.recoveryInputWrapper}>
            {Array.from({ length: 6 }, (_, value) => (
              <Input
                key={value}
                type="text"
                placeholder=""
                className={styles.recoveryInput}
                required
                label=""
                {...register(`code-${value}`)}
                onInput={(e) => handleInput(e as React.ChangeEvent<HTMLInputElement>, value)}
                ref={(el) => {
                  if (el) inputRefs.current[value] = el;
                }}
                maxLength={1}
                pattern="[0-9]"
              />
            ))}
          </div>
          <Button type="submit" className={styles.recoveryButton}>
            Отправить
          </Button>
          <div className={styles.recoveryResendButtonWrapper}>
            <button className={styles.recoveryResendButton}>
              Отправить код повторно
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecoveryEmailConfirmation;
