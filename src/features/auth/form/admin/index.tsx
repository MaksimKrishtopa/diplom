import {ReactNode} from "react";
import LogoForm from "@/widget/logo-login";
import ErrorMessage from "@/shared/components/error-message";
import InputPassword from "@/shared/components/inputs/password-input";
import Button from "@/shared/components/button";
import useAuthUserPresenter from "@/entities/case/user/login/presenter";
import {form} from "@/features/auth/form/admin/style.ts";
import Input from "@/shared/components/inputs/input";


const AuthorizationFormAdmin = (): ReactNode => {
    const {handleSubmit, errors, register} = useAuthUserPresenter()

    return (
        <form noValidate className={form.formContainerStyles}
              onSubmit={handleSubmit}>
            <LogoForm/>
            <div className={form.formGapStyles}>
                <h4>Админ панель</h4>
                <div className={form.inputFieldStyles}>
                    <Input
                        type={'email'}
                        required={true}
                        label={'E-mail'}
                        className={form.sizeInputStyles}
                        placeholder={'Введите e-mail'}
                        error={!!errors.email}
                        max={255}
                        {...register('email')}
                    />
                    <ErrorMessage message={errors.email?.message}/>
                </div>
                <div className={form.inputFieldStyles}>
                    <InputPassword
                        type={'password'}
                        required={true}
                        label={'Пароль'}
                        className={form.sizeInputStyles}
                        placeholder={'Введите пароль'}
                        error={!!errors.password}
                        max={100}
                        {...register('password')}
                    />
                    <ErrorMessage message={errors.password?.message}/>
                    <div className={form.formContainerInfoPasswordStyles}>
                        <p className={form.forgotPasswordStyles}>
                            Забыли пароль?
                        </p>
                    </div>
                </div>
                <div className={form.buttonContainerStyles}>
                    <Button type='submit'>Войти</Button>
                    <Button variant='secondary' type='button'>Создать аккаунт</Button>
                </div>
                <ErrorMessage message={errors.root?.message}/>
            </div>
        </form>
    );
};

export default AuthorizationFormAdmin;
