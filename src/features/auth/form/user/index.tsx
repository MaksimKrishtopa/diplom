import Input from "../../../../shared/components/inputs/input";
import ErrorMessage from "@/shared/components/error-message";
import Button from "@/shared/components/button";
import {ReactNode} from "react";
import InputPassword from "../../../../shared/components/inputs/password-input";
import {formStyles} from "@/features/auth/form/user/style.ts";
import LogoForm from "@/widget/logo-login";
import useAuthUserPresenter from "@/entities/case/user/login/presenter";



const AuthorizationFormUser = ():ReactNode => {
    const {handleSubmit, errors, register} = useAuthUserPresenter();

    return (
        <form noValidate className={formStyles.formContainerStyles}
              onSubmit={handleSubmit}>
            <LogoForm/>
            <div className={formStyles.formGapStyles}>
                <div className={formStyles.input}>
                    <Input
                        type={'email'}
                        required={true}
                        label={'E-mail'}
                        className={formStyles.sizeInputStyles}
                        placeholder={'Введите e-mail'}
                        error={!!errors.email}
                        max={255}
                        {...register('email')}
                    />
                    <ErrorMessage message={errors.email?.message}/>
                </div>
                <div className={formStyles.input}>
                    <InputPassword
                        type={'password'}
                        required={true}
                        label={'Пароль'}
                        className={formStyles.sizeInputStyles}
                        placeholder={'Введите пароль'}
                        error={!!errors.password}
                        max={100}
                        {...register('password')}
                    />
                    <ErrorMessage message={errors.password?.message}/>
                    <div className={formStyles.formContainerInfoPasswordStyles}>
                        <p className={formStyles.forgotPasswordStyles}>
                            Забыли пароль?
                        </p>
                    </div>
                </div>
                <div className={formStyles.buttonContainerStyles}>
                    <Button type='submit'>Войти</Button>
                    <Button styleType='secondary' type='button'>Создать аккаунт</Button>
                </div>
                <ErrorMessage message={errors.root?.message}/>
            </div>
        </form>
    );
};

export default AuthorizationFormUser;
