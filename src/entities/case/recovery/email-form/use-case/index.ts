import {IUserEmailPort} from "@/shared/interface/enitites/user/port";
import {sendResetPasswordEmailRepository} from "@/entities/repository/user";
import {useMutation} from "@tanstack/react-query";
import EMutationValues from "@/shared/enum/mutation-key";

const useSendResetPasswordEmailUseCase = () => {
    const execute = async (port: IUserEmailPort) => {
        return sendResetPasswordEmailRepository(port)
    }

    return useMutation({
        mutationKey: [EMutationValues.SEND_RESET_PASSWORD_EMAIL],
        mutationFn: execute,
    })
};

export default useSendResetPasswordEmailUseCase;