import {ReactNode} from 'react';
import Button from "@/shared/components/buttons/button";
import useUserResetPasswordPresenter from "@/entities/case/recovery/reset-password/presenter";
import InputPassword from "@/shared/components/inputs/password-input";
import {recoveryFormGlobalStyles} from "@/features/recovery/form/style.ts";

const ResetPasswordForm = (): ReactNode => {
    const {register, errors, handleSubmit} = useUserResetPasswordPresenter()

    return (
        <form onSubmit={handleSubmit} className={recoveryFormGlobalStyles.form} noValidate>
            <InputPassword
                label={'Пароль'}
                placeholder={'Введите пароль'}
                error={!!errors.password}
                errorMessage={errors.password?.message}
                max={100}
                {...register('password')}
            />
            <InputPassword
                label={'Повтор пароля'}
                placeholder={'Введите повтор пароля'}
                error={!!errors.password_repeat}
                errorMessage={errors.password_repeat?.message}
                max={100}
                {...register('password_repeat')}
            />
            <Button type="submit">
                Продолжить
            </Button>
        </form>
    );
};

export default ResetPasswordForm;
