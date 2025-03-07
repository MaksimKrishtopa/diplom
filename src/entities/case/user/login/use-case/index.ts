import {useMutation} from "@tanstack/react-query";
import IAdminDto from "@/shared/interface/user/dto/type.ts";
import getAuthorizeAdminRepository from "@/entities/repository/user";
import EAdminUseCaseKeys from "@/shared/enum/mutation-key";
import IAuthPort from "@/shared/interface/user/port";



const useAuthAdminsUseCase = () => {
    const execute = async (formData: IAuthPort) => {
        return getAuthorizeAdminRepository(formData);
    };

    return useMutation<IAdminDto, Error, IAuthPort>({
        mutationKey: [EAdminUseCaseKeys.keyAuth],
        mutationFn: execute,
    });
};


export default useAuthAdminsUseCase;