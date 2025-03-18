import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/shared/components/input';
import Logo from '@/assets/icons/logo';
import Button from '@/shared/components/button';
import BackButton from '@/shared/components/back-button';

const PasswordForm: React.FC = () => {
  const { handleSubmit, register } = useForm();

  const handleFormSubmit = (data: any) => {
    console.log(data);  // Обработка данных формы
  };

  return (
    <div className="flex flex-col items-start w-[346px] h-full justify-between">
      <div>
        <BackButton />
        <Logo />
      </div>

      <div className="flex flex-col w-full">
        <h2 className="text-title font-extrabold text-[#040405] font-poppins mb-3">
          Новый пароль
        </h2>
        <p className="text-[#040405]-normal mb-3">Придумайте новый пароль</p>

        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Input
            type="password"
            placeholder="Введите пароль"
            className="input w-[346px] mb-8 border-2 rounded-xl bg-[#FAFAFA] border-[#D1D1D1] focus:border-input-border-active focus:outline-none hover:border-input-border-active"
            required
            label="Пароль"
            {...register("password")}
          />
          <Input
            type="password"
            placeholder="Введите повторно пароль"
            className="input w-[346px] mb-8 border-2 rounded-xl bg-[#FAFAFA] border-[#D1D1D1] focus:border-input-border-active focus:outline-none hover:border-input-border-active"
            required
            label="Повтор пароля"
            {...register("confirm-password")}
          />
          <Button
            type="primary"
            className="w-full h-12 bg-primary text-white rounded-xl py-3 text-center cursor-pointer"
          >
            Продолжить
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PasswordForm;
