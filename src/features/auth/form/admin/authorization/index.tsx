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

const AuthorizationForm = () => {
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
        <div>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <Input
                    {...register('email')}
                    type={'email'}
                    name={'email'}
                    className={'email'}
                    required={true}
                    label={'Почта'}
                />
                {errors.email && <span className="dark:text-blue-400">{errors.email.message}</span>}

                <Input
                    {...register('password')}
                    type={'password'}
                    name={'password'}
                    className={'password'}
                    required={true}
                    label={'Пароль'}
                />
                {errors.password && <span className="dark:text-blue-400">{errors.password.message}</span>}

                <button
                    type='submit'

                    className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                >
                    Войти
                </button>
            </form>

            {authMessage && <div
                className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3">{authMessage}</div>}
        </div>
    );
};

export default AuthorizationForm;
