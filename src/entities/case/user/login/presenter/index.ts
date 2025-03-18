import useAuthAdminsUseCase from "../use-case";
import {FieldErrors, useForm, UseFormRegister} from "react-hook-form";
import IAuthPort from "../../../../../shared/interface/enitites/user/port";
import {yupResolver} from "@hookform/resolvers/yup";
import {useNavigate} from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";
import {UserAuthContext} from "@/app/provider/context";
import {BaseSyntheticEvent, useContext} from "react";
import {loginSchema} from "@/shared/lib/schema/user/login";
import IUser from "../../../../../shared/interface/enitites/user/enitites";
import IUserForm from "../../../../../shared/interface/enitites/user/form";


interface IAuthAdminsPresenterReturn {
    handleSubmit: (e?: BaseSyntheticEvent) => Promise<void>,
    errors: FieldErrors<IUser>,
    register: UseFormRegister<IUser>,
}


const useAuthUserPresenter = ():IAuthAdminsPresenterReturn => {
    const {mutateAsync} = useAuthAdminsUseCase();
    const {login} = useContext(UserAuthContext)
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setError,
        formState: {errors},
    } = useForm<IUserForm>({
        resolver: yupResolver(loginSchema),
        mode: 'onChange',
    });

    const onSubmit = async (formData: IAuthPort) => {
        await mutateAsync(formData, {
            onSuccess: async (data) => {
                console.log(data)
                login(data.accessToken);
                navigate(ERouterPath.MAIN_PAGE)
            },
            onError: () => {
                setError('root', {
                    message: 'Неверный email или пароль',
                });
            }
        })
    };

    return {
        handleSubmit: handleSubmit(onSubmit),
        errors: errors,
        register
    };
};

export default useAuthUserPresenter;