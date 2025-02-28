import Input from "@/shared/components/input";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import useGetMePresenter from "@/entities/case/user/login/presenter";
import {useUserStore} from "@/shared/lib/store/user";

const loginSchema = yup.object().shape({
    email: yup.string().email('Неверный формат email').required('Обязательное поле'),
    password: yup.string().min(6, 'Минимум 6 символов').required('Обязательное поле'),
});

interface LoginFormValues {
    email: string;
    password: string;
}

const AuthorizationFormUser = () => {
    const {mutateAsync} = useGetMePresenter();
    const {authMessage} = useUserStore();

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<LoginFormValues>({
        resolver: yupResolver(loginSchema),
        mode: 'onChange',
    });


    const onSubmitForm = async (formData: LoginFormValues) => {
        try {
            await mutateAsync(formData);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div
                className="flex justify-center w-[708.92px] h-[770px] pt-[90px] rounded-tl-[40px] rounded-bl-[40px] bg-[#D9D9D9F2]">
                <form className="flex justify-center flex-col items-center gap-[42px]"
                      onSubmit={handleSubmit(onSubmitForm)}>
                    <h4 className="justify-center font-poppins font-bold font-poppins text-2xl text-[28px] leading-6 tracking-normal text-[#5687BB] mb-[12px]">
                        Войти в аккаунт
                    </h4>
                    <div className="flex flex-col items-center">
                        <div className="flex items-start flex-col ">
                            <Input
                                {...register('email')}
                                type={'email'}
                                name={'email'}
                                required={true}
                                label={'E-mail'}
                            />
                            {errors.email && <span className="text-warning mr-57">{errors.email.message}</span>}
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-start flex-col ">
                            <Input
                                {...register('password')}
                                type={'password'}
                                name={'password'}
                                required={true}
                                label={'Пароль'}
                            />
                            {errors.password && (
                                <span className="text-warning pt-1 text-sm">{errors.password.message}</span>
                            )}
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
                className="flex flex-col items-center w-[406.15386962890625px] gap-[83px] h-[770px] rounded-tr-[40px] rounded-br-[40px] bg-[#5687BBF2]">
                <h4 className="font-poppins font-bold text-[28px] pt-[189px] leading-6 tracking-normal text-[#F0F4F3]">
                    С ВОЗВРАЩЕНИЕМ
                </h4>
                <p className="w-[302px] h-[95px] font-normal text-[18px] text-[#F0F4F3]">
                    Мы рады видеть Вас снова на нашем блоге о путешествиях. Войдите в систему, указав верные данные.
                </p>
                <button
                    className="flex justify-center font-bold w-[190px] h-[60px] pt-[16px] pr-[103px] pb-[16px]
                    pl-[103px] text-[16px] cursor-pointer text-[#FFFFFF] rounded-[30px] border-2 border-[#FFFFFF] bg-[#5687BB] ">Зарегистироваться
                </button>
            </div>
        </div>
    );
};

export default AuthorizationFormUser;
