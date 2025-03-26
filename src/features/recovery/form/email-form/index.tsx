import React, { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/shared/components/inputs/input';
import Logo from '@/shared/components/icons/logo';
import Button from '@/shared/components/button';

const RecoveryEmailInput = (): ReactNode => {
  const { handleSubmit, register } = useForm();

  const handleFormSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-start w-[346px] h-full justify-between">
      <Logo width={'179px'} height={'60px'} />
      <div className="flex flex-col w-full">
        <h2 className="text-title font-extrabold text-[#040405] font-poppins mb-8">
          Забыли пароль?
        </h2>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Input
            type="email"
            placeholder="Введите e-mail"
            className="input w-[346px] mb-8"
            required
            label="E-mail"
            max={255}
            {...register("email")}
          />
          <Button
            type="submit"
            className="w-full h-12 bg-primary text-white rounded-xl py-3 text-center cursor-pointer"
          >
            Продолжить
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RecoveryEmailInput;