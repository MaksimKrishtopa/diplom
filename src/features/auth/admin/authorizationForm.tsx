import {useState} from 'react';
import Input from "@/shared/components/input";
import useGetMePresenter from "../../../entities/case/user/login/presenter";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import * as yup from 'yup';

const loginSchema = yup.object().shape({
    email: yup.string().email('Неверный формат email').required('Обязательное поле'),
    password: yup.string().min(6, 'Минимум 6 символов').required('Обязательное поле'),
});

interface LoginFormValues {
    email: string;
    password: string;
}

const AuthorizationForm = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [formData, setFormData] = useState<LoginFormValues>({ email: '', password: '' });

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<LoginFormValues>({
        resolver: yupResolver(loginSchema),
        mode: 'onChange',
    });

    const { refetch } = useGetMePresenter(formData.email, formData.password);

    const onSubmitForm = async (formData: LoginFormValues) => {
        setErrorMessage(null);

        const { email, password } = formData;

        setFormData(formData);


        try {
            const { data: fetchedData, status: fetchedStatus } = await refetch();

            console.log("Данные после запроса:", fetchedData);
            console.log("Статус после запроса:", fetchedStatus);

            if (fetchedStatus === "success" && fetchedData) {
                const admin = fetchedData.find(admin => admin.email === email && admin.password === password);
                if (admin) {
                    console.log("Успешная авторизация!", admin);
                    setErrorMessage(null);
                } else {
                    setErrorMessage("Неверные данные!");
                }
            } else if (fetchedStatus === "error") {
                setErrorMessage("Ошибка при авторизации");
            }
        } catch (error) {
            console.error("Ошибка при выполнении запроса:", error);
            setErrorMessage("Ошибка при авторизации");
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
                {errors.email && <span style={{color: 'red'}}>{errors.email.message}</span>}

                <Input
                    {...register('password')}
                    type={'password'}
                    name={'password'}
                    className={'password'}
                    required={true}
                    label={'Пароль'}
                />
                {errors.password && <span style={{color: 'red'}}>{errors.password.message}</span>}

                <button
                    type='submit'
                    className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                >
                    Войти
                </button>
            </form>

            {errorMessage && <div style={{color: 'red'}}>{errorMessage}</div>}
        </div>
    );
};

export default AuthorizationForm;
