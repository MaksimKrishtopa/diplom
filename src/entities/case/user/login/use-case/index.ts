import {useMutation, UseMutationResult} from "@tanstack/react-query";
import IUserDto from "@/shared/interface/user/dto/type.ts";
import {getAuthorizeAdminRepository} from "@/entities/repository/user";
import EMutationValues from "@/shared/enum/mutation-key";
import IAuthPort from "@/shared/interface/user/port";



const useAuthAdminsUseCase = ():UseMutationResult<IUserDto, Error, IAuthPort> => {
    const execute = async (port: IAuthPort) => {
        return getAuthorizeAdminRepository(port);
    };

    return useMutation({
        mutationKey: [EMutationValues.KEY_AUTH],
        mutationFn: execute,
    });
};


export default useAuthAdminsUseCase;