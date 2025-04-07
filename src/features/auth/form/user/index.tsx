import ErrorMessage from "@/shared/components/error-message";
import {ReactNode} from "react";
import {authFormStyles} from "@/features/auth/form/user/style.ts";
import useAuthUserPresenter from "@/entities/case/user/login/presenter";
import Input from "@/shared/components/inputs/input";
import InputPassword from "@/shared/components/inputs/password-input";
import Button from "@/shared/components/buttons/button";


const AuthorizationFormUser = (): ReactNode => {
    const {handleSubmit, errors, register, handleNavigateRecoverPass} = useAuthUserPresenter();


    return (
        <form noValidate className={authFormStyles.form}
              onSubmit={handleSubmit}>
            <div className={authFormStyles.contentWrap}>
                <div className={authFormStyles.inputsWrap}>
                    <Input
                        type={'email'}
                        required={true}
                        label={'E-mail'}
                        placeholder={'Введите e-mail'}
                        error={!!errors.email}
                        errorMessage={errors.email?.message}
                        max={255}
                        {...register('email')}
                    />
                    <InputPassword
                        label={'Пароль'}
                        placeholder={'Введите пароль'}
                        error={!!errors.password}
                        errorMessage={errors.password?.message}
                        max={100}
                        {...register('password')}
                    />
                </div>
                <div className={authFormStyles.forgotPasswordWrap}>
                    <button
                        type='button'
                        onClick={handleNavigateRecoverPass}
                        className={authFormStyles.forgotPasswordButton}
                    >
                        Забыли пароль?
                    </button>
                </div>
                <ErrorMessage message={errors.root?.message}/>
            </div>
            <div className={authFormStyles.buttonsWrap}>
                <Button type='submit'>Войти</Button>
                <Button variant='secondary' type='button'>Создать аккаунт</Button>
            </div>
        </form>
    );
};

export default AuthorizationFormUser;
