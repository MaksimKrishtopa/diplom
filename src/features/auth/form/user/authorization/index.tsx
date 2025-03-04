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
                className="flex justify-center background-light">
                <form noValidate className="flex justify-center flex-col items-center gap-[42px]"
                      onSubmit={handleSubmit}>
                    <h4 className="justify-center font-poppins font-bold font-poppins text-2xl text-[28px] leading-6 tracking-normal text-[#5687BB] mb-[12px]">
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
                                    required:'Обязательное поле',
                                    pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                                        message: 'Неверный email или пароль',
                                    },
                                })}
                            />
                            <ErrorMessage message={errors.email?.message} />
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
                            <ErrorMessage message={errors.password?.message} />
                        </div>
                    </div>
                    <button
                        type='submit'
                        className="cursor-pointer w-[412px] h-[60px] rounded-[8px] border-2 bg-[#5687BB]
                        border-[#FFFFFF] text-[#FFFFFF] font-bold pt-[16px] pr-[103px] pb-[16px] pl-[103px]"
                    >
                        ВОЙТИ
                    </button>
                    {authMessage && <div className="text-error p-[5px]">{authMessage}</div>}
                    <div>
                        <hr className="border-[#5687BB] w-[412px] border-2"></hr>
                        <p className="flex justify-center font-roboto text-[16px] font-normal text-lg leading-6 tracking-normal text-[#5687BB] mt-[15px]">
                            Забыли пароль?
                        </p>
                    </div>
                </form>
            </div>
            <div
                className="flex flex-col items-center gap-[83px] background-blue">
                <h4 className="font-poppins font-bold text-[28px] pt-[189px] leading-6 tracking-normal text-[#F0F4F3]">
                    С ВОЗВРАЩЕНИЕМ
                </h4>
                <p className="w-[302px] h-[95px] font-normal text-[18px] text-[#F0F4F3]">
                    Мы рады видеть Вас снова на нашем блоге о путешествиях. Войдите в систему, указав верные данные.
                </p>
                <button
                    className="flex justify-center font-bold w-[190px] h-[60px] pt-[16px] pr-[103px] pb-[16px]
                    pl-[103px] text-[16px] cursor-pointer text-[#FFFFFF] rounded-[30px] border-2 border-[#FFFFFF]">Зарегистироваться
                </button>
            </div>
        </div>
    );
};

export default AuthorizationFormUser;
