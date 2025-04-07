import {IUserResetPasswordPort} from "@/shared/interface/enitites/user/port";
import {userResetPasswordRepository} from "@/entities/repository/user";
import {useMutation} from "@tanstack/react-query";
import EMutationValues from "@/shared/enum/mutation-key";

const useUserResetPasswordUseCase = () => {
    const execute = async (port: IUserResetPasswordPort) => {
        return userResetPasswordRepository(port)
    }

    return useMutation({
        mutationKey: [EMutationValues.USER_RESET_PASSWORD],
        mutationFn: execute,
    })
};

export default useUserResetPasswordUseCase;