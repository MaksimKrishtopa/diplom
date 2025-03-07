import useAuthAdminsUseCase from "../use-case";
import {useForm} from "react-hook-form";
import IAuthPort from "@/shared/interface/user/port";
import {yupResolver} from "@hookform/resolvers/yup";
import {updateUserStore} from "@/shared/lib/store/user";
import {loginSchema} from "@/entities/case/user/login/validate-schema";
import {useNavigate} from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";
import {UserContext} from "@/shared/hook";
import {useContext} from "react";

const useAuthAdminsPresenter = () => {
    const {mutateAsync, data, status} = useAuthAdminsUseCase();
    const { login } = useContext(UserContext)
    const navigate = useNavigate();



    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<IAuthPort>({
        resolver: yupResolver(loginSchema),
        mode: 'onSubmit',
    });

    const onSubmit = async (formData: IAuthPort) => {
        try {
            const result = await mutateAsync(formData);
            if (result) {
                login(JSON.stringify(result));
                navigate(ERouterPath.HOME_PAGE)
            } else {
                updateUserStore({authMessage: 'Неверный email или пароль'});
            }
        } catch (error) {
            updateUserStore({authMessage: 'Неверные данные!'});
        }
    };

    return {
        handleSubmit: handleSubmit(onSubmit),
        formState: {errors},
        register,
        data,
        status
    };
};

export default useAuthAdminsPresenter;