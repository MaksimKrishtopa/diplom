import Input from "@/shared/components/input";
import useAuthAdminsPresenter from "@/entities/case/user/login/presenter";


const AuthorizationForm = () => {
    const {handleSubmit,formState: {errors}, register,} = useAuthAdminsPresenter();

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input
                    type={'email'}
                    className={'email'}
                    required={true}
                    label={'Почта'}
                    {...register('email')}
                />
                {errors.email && <span className="dark:text-blue-400">{errors.email.message}</span>}
                <Input
                    type={'password'}
                    className={'password'}
                    required={true}
                    label={'Пароль'}
                    {...register('password')}
                />
                {errors.password && <span className="dark:text-blue-400">{errors.password.message}</span>}

                <button
                    type='submit'
                    className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                >
                    Войти
                </button>
            </form>
        </div>
    );
};

export default AuthorizationForm;
