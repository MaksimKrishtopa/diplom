import {useRef} from 'react';
import Input from "@/shared/components/input";
import {fetchAdmin} from "@/features/admin-registration/model/authorization.ts";
import {IAdminProps} from "@/features/admin-registration/model/type.ts";
import {useQuery} from "@tanstack/react-query";

const AuthorizationForm = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const {isLoading, error, refetch} = useQuery<IAdminProps[], Error>({
        queryKey: ['admin'],
        queryFn: async () => {
            if (emailRef.current && passwordRef.current) {
                const email: string = emailRef.current.value
                const password: string = passwordRef.current.value
                return fetchAdmin(email, password)
            }
            return [];
        },
        enabled: false,
    });

    const handleClickAuthorization = async () => {
        if (emailRef.current && passwordRef.current) {
            const email: string = emailRef.current.value
            const password: string = passwordRef.current.value

            if (!email || !password) {
                alert("Пожалуйста, введите email и пароль.")
                return
            }

            const {data} = await refetch();

            if (data) {
                const admin = data.find(admin => admin.email === email && admin.password === password);
                if (admin) {
                    console.log("Успешная авторизация!")
                } else {
                    console.error("Неверные данные!")
                }
            }
        }
    };

    return (
        <div>
            <form method="POST">
                <Input
                    type={'email'}
                    name={'email'}
                    className={'email'}
                    required={true}
                    label={'Почта'}
                    ref={emailRef}
                />
                <Input
                    type={'password'}
                    name={'password'}
                    className={'password'}
                    required={true}
                    label={'Пароль'}
                    ref={passwordRef}
                />
            </form>
            <button
                type='button'
                onClick={handleClickAuthorization}
                className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
            >
                Войти
            </button>

            {isLoading && <div>Загрузка...</div>}
            {error && <div>Error: {error.message}</div>}
        </div>
    );
};

export default AuthorizationForm;