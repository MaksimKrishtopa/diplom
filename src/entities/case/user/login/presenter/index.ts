import useAuthAdminsUseCase from "@/entities/case/user/login/use-case";
import {FieldErrors, useForm, UseFormRegister} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useNavigate} from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";
import {UserAuthContext} from "@/app/provider/context";
import {BaseSyntheticEvent, useContext} from "react";
import {loginSchema} from "@/shared/lib/schema/user/login";
import {IAuthPort} from "@/shared/interface/enitites/user/port";
import IUserForm from "@/shared/interface/enitites/user/form";
import {IUserDto} from "@/shared/interface/enitites/user/dto/type.ts";


interface IAuthAdminsPresenterReturn {
    handleSubmit: (e?: BaseSyntheticEvent) => Promise<void>,
    errors: FieldErrors<IUserDto>,
    register: UseFormRegister<any>,
}


const useAuthUserPresenter = (): IAuthAdminsPresenterReturn => {
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

    const onSubmit = async (data: IAuthPort) => {
        await mutateAsync(data, {
            onSuccess: async (data) => {
                login(data);
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