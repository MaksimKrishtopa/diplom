import Input from "@/shared/components/input";
import useAuthAdminsPresenter from "@/entities/case/user/login/presenter";
import ErrorMessage from "@/shared/components/error-message";
import Button from "@/shared/components/button";
import {backgroundShapes, logo} from "@/shared/icon";


const AuthorizationFormUser = () => {
    const {handleSubmit, formState: {errors}, register} = useAuthAdminsPresenter();

    return (
        <div className="flex justify-center items-center background-light w-[fit-content] h-[fit-content] shadow-3xl-white-background">
            <div
                className="flex flex-col justify-center items-center gap-[90px] mr-[32px]">
                <div
                    className="w-[408px] h-[622px] rounded-[16px] object-cover bg-cover bg-[center_top] bg-no-repeat"
                    style={{backgroundImage: `url(${backgroundShapes})`}}
                ></div>
            </div>
            <div
                className="flex justify-center items-center">
                <form noValidate className="flex justify-center flex-col items-start items-center gap-[32px]"
                      onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-[12px] items-start w-[219px] h-[114px]">
                        <img alt="фон" src={logo} className="background"></img>
                        <h4 className="justify-center font-bold text-title tracking-normal text-[#040405]">
                            Вход в систему
                        </h4>
                    </div>
                    <div className="flex flex-col gap-[24px]">
                        <div className="flex items-start flex-col">
                            <Input
                                type={'email'}
                                required={true}
                                label={'E-mail'}
                                className={'w-[346px] h-[48px]'}
                                placeholder={'Введите e-mail'}
                                validationError={!!errors.email}
                                max={255}
                                {...register('email')}
                            />
                            <ErrorMessage message={errors.email?.message}/>
                        </div>
                        <div className="flex items-start flex-col">
                            <Input
                                type={'password'}
                                required={true}
                                label={'Пароль'}
                                className={'w-[346px] h-[48px]'}
                                placeholder={'Введите пароль'}
                                validationError={!!errors.password}
                                max={100}
                                {...register('password')}
                            />
                            <ErrorMessage message={errors.password?.message}/>
                            <div className="w-full flex justify-end">
                                <p className="text-paragraph-lg font-normal tracking-normal text-blue-text mt-[10px]">
                                    Забыли пароль?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-[12px]">
                        <Button styleType='primary' type='submit'>Войти</Button>
                        <Button styleType='secondary' type='submit'>Создать аккаунт</Button>
                    </div>
                    {errors.root && <p>{errors.root.message}</p>}
                </form>
            </div>
        </div>
    );
};

export default AuthorizationFormUser;
