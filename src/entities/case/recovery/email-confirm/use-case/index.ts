import {IUserResetPasswordPort} from "@/shared/interface/enitites/user/port";
import {sendResetPasswordCodeRepository} from "@/entities/repository/user";
import {useMutation} from "@tanstack/react-query";
import EMutationValues from "@/shared/enum/mutation-key";

const useSendResetPasswordCodeUseCase = () => {
    const execute = async (port: IUserResetPasswordPort) => {
        return sendResetPasswordCodeRepository(port)
    }

    return useMutation({
        mutationKey: [EMutationValues.SEND_RESET_PASSWORD_CODE],
        mutationFn: execute,
    })
};

export default useSendResetPasswordCodeUseCase;