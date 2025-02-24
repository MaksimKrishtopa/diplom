import {useContext, useState} from 'react';
import Input from "@/shared/components/input";
import useGetMePresenter from "../../../entities/case/user/login/presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import {UserContext} from "@/app/provider/context/user";

const loginSchema = yup.object().shape({
    email: yup.string().email('Неверный формат email').required('Обязательное поле'),
    password: yup.string().min(6, 'Минимум 6 символов').required('Обязательное поле'),
});

interface LoginFormValues {
    email: string;
    password: string;
}

const AuthorizationForm = () => {
    const [message, setMessage] = useState<string | null>(null);
    const { authError } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<LoginFormValues>({
        resolver: yupResolver(loginSchema),
        mode: 'onChange',
    });

    const { mutate,data,status } = useGetMePresenter();

    const onSubmitForm = async (formData: LoginFormValues) => {
        setMessage(null);

        try {
            const request = await mutate(formData);
            if (data) {
                if (status=='success') {
                    console.log("Успешная авторизация!");
                    setMessage("Вы успешно авторизировались!");
                    reset();
                }
                if (status=='error') {
                    reset();
                    setMessage("Неверные данные!");
                }
            } else {
                reset()
            }

        } catch (error: any) {
            console.error("Ошибка при выполнении запроса:", error);
            setMessage(error.message || "Ошибка при авторизации");
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
                {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}

                <Input
                    {...register('password')}
                    type={'password'}
                    name={'password'}
                    className={'password'}
                    required={true}
                    label={'Пароль'}
                />
                {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}

                <button
                    type='submit'
                    className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                >
                    Войти
                </button>
            </form>
            {authError && <div style={{ color: 'red' }}>{authError}</div>}
        </div>
    );
};

export default AuthorizationForm;
