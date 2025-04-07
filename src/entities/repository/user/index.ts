import BACKEND_HTTPS_SERVICES from "@/shared/api/backend.ts";
import {IUserDto} from "@/shared/interface/enitites/user/dto/type.ts";
import {
    IAuthPort,
    IUserEmailPort,
    IUserResetPasswordPort
} from "@/shared/interface/enitites/user/port";

const USER_PREFIX = '/user'

const getAuthorizeUserRepository = async (port: IAuthPort): Promise<IUserDto> => {
    return BACKEND_HTTPS_SERVICES.post(`${USER_PREFIX}/login`, port)
        .then(response => response.data);
}

const sendResetPasswordEmailRepository = async (port: IUserEmailPort): Promise<void> => {
    return BACKEND_HTTPS_SERVICES.post(`${USER_PREFIX}/send-reset-code`, port)
}

const sendResetPasswordCodeRepository = async (port: IUserResetPasswordPort) => {
    return BACKEND_HTTPS_SERVICES.post(`${USER_PREFIX}/reset-password`, port)
}

const userResetPasswordRepository = async (port: IUserResetPasswordPort): Promise<IUserDto> => {
    return BACKEND_HTTPS_SERVICES.post(`${USER_PREFIX}/reset-password`, port)
}

export {
    getAuthorizeUserRepository,
    sendResetPasswordEmailRepository,
    userResetPasswordRepository,
    sendResetPasswordCodeRepository
};