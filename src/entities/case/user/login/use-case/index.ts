import {useMutation, UseMutationResult} from "@tanstack/react-query";
import EMutationValues from "@/shared/enum/mutation-key";
import {IAuthPort} from "@/shared/interface/enitites/user/port";
import {IUserDto} from "@/shared/interface/enitites/user/dto/type.ts";
import {getAuthorizeUserRepository} from "@/entities/repository/user";

const useAuthUserUseCase = ():UseMutationResult<IUserDto, Error, IAuthPort> => {
    const execute = async (port: IAuthPort) => {
        return getAuthorizeUserRepository(port);
    };

    return useMutation({
        mutationKey: [EMutationValues.USER_AUTH],
        mutationFn: execute,
    });
};


export default useAuthUserUseCase;