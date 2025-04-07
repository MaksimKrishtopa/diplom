import {ReactNode} from 'react';
import Input from '@/shared/components/inputs/input';
import Button from "@/shared/components/buttons/button";
import {recoveryFormGlobalStyles} from "../style.ts";
import useSendResetPasswordEmailPresenter from "@/entities/case/recovery/email-form/presenter";

const RecoveryEmailInputForm = (): ReactNode => {
    const {register, errors, handleSubmit} = useSendResetPasswordEmailPresenter()


    return (
        <form onSubmit={handleSubmit} className={recoveryFormGlobalStyles.form} noValidate>
            <Input
                type="email"
                placeholder="Введите e-mail"
                required
                label="E-mail"
                error={!!errors.email}
                errorMessage={errors.email?.message}
                max={255}
                {...register("email")}
            />
            <Button type="submit">
                Продолжить
            </Button>
        </form>
    );
};

export default RecoveryEmailInputForm;