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
                className="flex justify-center w-[708.92px] h-[770px] rounded-tl-[40px] rounded-bl-[40px] bg-[#D9D9D9F2]">
                <form className="flex justify-center flex-col items-center gap-[15px]"
                      onSubmit={handleSubmit(onSubmitForm)}>
                    <h4 className="justify-center font-poppins font-extrabold text-[28px] leading-6 tracking-normal text-[#5687BB] mb-10">
                        Войти в аккаунт
                    </h4>
                    <Input
                        {...register('email')}
                        type={'email'}
                        name={'email'}
                        required={true}
                        label={'Почта'}
                    />
                    {errors.email && <span className="text-warning mr-57 pt-1">{errors.email.message}</span>}

                    <Input
                        {...register('password')}
                        type={'password'}
                        name={'password'}
                        required={true}
                        label={'Пароль'}
                    />
                    {errors.password && (
                        <span className="text-warning mr-59 pt-1">{errors.password.message}</span>
                    )}

                    <button
                        type='submit'
                        className="w-[412px] h-[60px] rounded-[8px] border-2 bg-[#5687BB] border-[#FFFFFF] text-[#FFFFFF] pt-[16px] pr-[103px] pb-[16px] pl-[103px] mt-[55px] mb-[39px]"
                    >
                        Войти
                    </button>
                    {authMessage && <div className="text-error p-[5px]">{authMessage}</div>}
                    <hr className="border-[#5687BB] w-[412px] border-2"></hr>
                    <p className="flex justify-center font-roboto font-normal text-lg leading-6 tracking-normal text-[#5687BB]">
                        Забыли пароль?
                    </p>
                </form>
            </div>
            <div
                className="flex justify-center flex-col w-[406.15386962890625px] h-[770px] rounded-tr-[40px] rounded-br-[40px] bg-[#5687BBF2]">
                <h4 className="font-poppins font-extrabold text-[28px] leading-6 tracking-normal text-[#F0F4F3]">
                    С ВОЗВРАЩЕНИЕМ
                </h4>
                <p className="w-[302px] h-[95px] text-[#F0F4F3]">
                    Мы рады видеть Вас снова на нашем блоге о путешествиях. Войдите в систему, указав верные данные.
                </p>
                <button className="k">Зарегистироваться</button>
            </div>
        </div>
    );
};

export default AuthorizationFormUser;
