import Input from "@/shared/components/input";
import {useUserStore} from "@/shared/lib/store/user";
import useAuthAdminsPresenter from "@/entities/case/user/login/presenter";
import ErrorMessage from "@/shared/components/error-message";


const AuthorizationFormUser = () => {
    const {handleSubmit, formState: {errors}, register} = useAuthAdminsPresenter();
    const {authMessage} = useUserStore();

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div
                className="flex justify-center items-center background-light shadow-3xl">
                <form noValidate className="flex justify-center flex-col items-center gap-[40px]"
                      onSubmit={handleSubmit}>
                    <h4 className="justify-center font-bold font-poppins text-title tracking-normal text-blue-text mb-[50px]">
                        Войти в аккаунт
                    </h4>
                    <div className="flex flex-col items-center">
                        <div className="flex items-start flex-col">
                            <Input
                                type={'email'}
                                required={true}
                                label={'E-mail'}
                                max={255}
                                {...register('email', {
                                    required: 'Обязательное поле',
                                    pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                                        message: 'Неверный email или пароль',
                                    },
                                })}
                            />
                            <ErrorMessage message={errors.email?.message}/>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-start flex-col ">
                            <Input
                                type={'password'}
                                required={true}
                                label={'Пароль'}
                                max={100}
                                {...register('password', {
                                    required: 'Обязательное поле',
                                    pattern: {
                                        value: /^[0-9a-zA-Z-_!?]+/,
                                        message: 'Неверный email или пароль',
                                    },
                                })}
                            />
                            <ErrorMessage message={errors.password?.message}/>
                        </div>
                    </div>
                    <button
                        type='submit'
                        className="cursor-pointer w-[412px] h-[60px] rounded-[8px] border-2 bg-primary
                        border-primary-border text-white-text font-bold py-4 px-[103px] mt-[25px]"
                    >
                        ВОЙТИ
                    </button>
                    {authMessage && <div className="text-error p-[5px]">{authMessage}</div>}
                    <div>
                        <hr className="border-[#5687BB] w-[412px] border-2"></hr>
                        <p className="flex justify-center font-roboto text-paragraph-lg font-normal text-lg tracking-normal text-blue-text mt-[13px]">
                            Забыли пароль?
                        </p>
                    </div>
                </form>
            </div>
            <div
                className="flex flex-col justify-center items-center gap-[90px] background-blue shadow-3xl">
                <h4 className="font-poppins font-bold text-title tracking-normal text-white-text">
                    С ВОЗВРАЩЕНИЕМ
                </h4>
                <p className="w-[264px] h-[95px] font-normal text-paragraph-xl text-white-text">
                    Мы рады видеть Вас снова на нашем блоге о путешествиях. Войдите в систему, указав верные данные.
                </p>
                <button
                    className="flex justify-center font-bold w-[190px] h-[60px] py-4 px-[103px]
                     text-paragraph-lg cursor-pointer text-white-text rounded-[30px] border-2 border-primary-border">Зарегистироваться
                </button>
            </div>
        </div>
    );
};

export default AuthorizationFormUser;
