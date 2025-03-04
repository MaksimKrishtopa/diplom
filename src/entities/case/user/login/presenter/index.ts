import useAuthAdminsUseCase from "../use-case";
import {useForm} from "react-hook-form";
import {IAuthPort} from "@/shared/interface/user/port";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginSchema} from "../validate-schema";
import {updateUserStore} from "@/shared/lib/store/user";

const useAuthAdminsPresenter = () => {
    const {mutateAsync, data, status} = useAuthAdminsUseCase();

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
            if (result.length > 0) {
                const userData = result[0];
                updateUserStore({user: userData});
                updateUserStore({authMessage: 'Успешная авторизация'});
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