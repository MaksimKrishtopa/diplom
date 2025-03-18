import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/shared/components/input';
import Logo from '@/assets/icons/logo';
import Button from '@/shared/components/button';
import BackButton from '@/shared/components/back-button';
import { debounce } from 'lodash';

const RecoveryEmailConfirmation: React.FC = () => {
  const { handleSubmit, register, setValue } = useForm();

  const debouncedSetValue = useMemo(
    () => debounce((name: string, value: string) => setValue(name, value), 300),
    [setValue]
  );

  const handleFormSubmit = (data: any) => {
  };

  return (
    <div className="flex flex-col items-start w-[346px] h-full justify-between">
      <div>
        <BackButton />
        <Logo />
      </div>

      <div className="flex flex-col w-full">
        <h2 className="text-title font-extrabold text-[#040405] font-poppins mb-3">
          Подтверждение кода
        </h2>
        <p className="text-[#040405]-normal mb-8">Введите код из письма</p>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="flex justify-between mb-8 gap-2">
            {[...Array(6)].map((_, i) => (
              <Input
                key={i}
                type="text"
                placeholder=""
                className="w-12 h-12 text-center border-2 rounded-xl bg-[#FAFAFA] border-[#D1D1D1] focus:border-input-border-active focus:outline-none hover:border-input-border-active"
                required
                label=""
                {...register(`code-${i}`)}
                onChange={(e) => debouncedSetValue(`code-${i}`, e.target.value)}
              />
            ))}
          </div>
          <Button
            type="primary"
            className="w-full h-12 bg-primary text-white rounded-xl py-3 text-center cursor-pointer"
          >
            Отправить
          </Button>
          <div className="flex justify-center mt-4">
            <button className="text-blue-500 cursor-pointer">
                Отправить код повторно
            </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default RecoveryEmailConfirmation;
