import {useMutation} from "@tanstack/react-query";
import {IAdminProps} from "@/entities/type.ts";
import getAllAdminRepository from "@/entities/repository/user";
import {updateUserStore} from "@/shared/lid/store/user";

enum EAdminUseCaseKeys {
    keyAuth = "admin-authorization",
}


const useGetAdminsUseCase = () => {
    return useMutation<IAdminProps[], Error, { email: string; password: string }>({
        mutationKey: [EAdminUseCaseKeys.keyAuth],
        mutationFn: (formData:{ email: string; password: string }) => getAllAdminRepository(formData),
        onSuccess: (data) => {
            if (data.length > 0) {
                const userData = data[0];
                updateUserStore({ user:userData})
                updateUserStore({ authMessage: 'Успешная авторизация' })
            } else {
                updateUserStore({ authMessage: "Неверные данные!" })
            }
        },
        onError: () => {
            updateUserStore({ authMessage: "Неверные данные!" })
        },
    });
};

export default useGetAdminsUseCase;