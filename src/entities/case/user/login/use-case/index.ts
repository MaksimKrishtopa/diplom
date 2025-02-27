import {useMutation} from "@tanstack/react-query";
import {IAdminDto} from "@/shared/interface/user/dto/type.ts";
import getAuthorizeAdminRepository from "@/entities/repository/user";
import {updateUserStore} from "@/shared/lib/store/user";
import {EAdminUseCaseKeys} from "@/shared/enum/mutation-key";
import {IAuthPort} from "@/shared/interface/user/port";

const execute = async (formData: IAuthPort) => {
    return getAuthorizeAdminRepository(formData);
};

const useAuthAdminsUseCase = () => {
    return useMutation<IAdminDto[], Error, IAuthPort>({
        mutationKey: [EAdminUseCaseKeys.keyAuth],
        mutationFn: (formData:{ email: string; password: string }) => execute(formData),
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


export default useAuthAdminsUseCase;