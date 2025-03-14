import Input from "@/shared/components/input";
import useAuthAdminsPresenter from "@/entities/case/user/login/presenter";
import ErrorMessage from "@/shared/components/error-message";
import Button from "@/shared/components/button";
import React from "react";
import InputPassword from "@/shared/components/password-input";
import {
    buttonContainerStyles,
    forgotPasswordStyles,
    inputFieldStyles
} from "@/features/auth/form/user/style.ts";
import LogoForm from "../../../../widget/logo-login";


const AuthorizationFormUser: React.FC = () => {
    const {handleSubmit, formState: {errors}, register} = useAuthAdminsPresenter();

    return (
        <form noValidate className="flex flex-col items-start gap-8"
              onSubmit={handleSubmit}>
            <LogoForm/>
            <div className='flex items-start flex-col gap-[25px]'>
                <div className={inputFieldStyles()}>
                    <Input
                        type={'email'}
                        required={true}
                        label={'E-mail'}
                        className={'w-[346px] h-12'}
                        placeholder={'Введите e-mail'}
                        error={!!errors.email}
                        max={255}
                        {...register('email')}
                    />
                    <ErrorMessage message={errors.email?.message}/>
                </div>
                <div className={inputFieldStyles()}>
                    <InputPassword
                        type={'password'}
                        required={true}
                        label={'Пароль'}
                        className={'w-[346px] h-12'}
                        placeholder={'Введите пароль'}
                        error={!!errors.password}
                        max={100}
                        {...register('password')}
                    />
                    <ErrorMessage message={errors.password?.message}/>
                    <div className="w-full flex justify-end">
                        <p className={forgotPasswordStyles()}>
                            Забыли пароль?
                        </p>
                    </div>
                </div>
                <div className={buttonContainerStyles()}>
                    <Button type='submit'>Войти</Button>
                    <Button styleType='secondary' type='button'>Создать аккаунт</Button>
                </div>
                <ErrorMessage message={errors.root?.message}/>
            </div>
        </form>
    )
        ;
};

export default AuthorizationFormUser;
