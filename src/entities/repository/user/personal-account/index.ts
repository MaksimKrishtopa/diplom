import BACKEND_HTTPS_SERVICES from "@/shared/api/backend.ts";
import {IUserDto} from "@/shared/interface/enitites/user/dto/type.ts";
import {IUserImagePort, IUserInfoPort, IUserPasswordPort} from "@/shared/interface/enitites/user/port";
import BACKEND_HTTPS_SERVICES_FILE from "@/shared/api/backend-file.ts";

const USER_BASE_PATH = '/user/';

const getUserInfoRepository = async (): Promise<IUserDto> => {
    return BACKEND_HTTPS_SERVICES.get(`${USER_BASE_PATH}?id=${localStorage.getItem('id')}`)
        .then(response => response.data);
}

const changePasswordUserRepository = async (port: IUserPasswordPort): Promise<IUserDto> => {
    return BACKEND_HTTPS_SERVICES.patch(`${USER_BASE_PATH}password`, port)
        .then(response => response.data);
}

const deleteUserRepository = async (): Promise<IUserDto> => {
    return BACKEND_HTTPS_SERVICES.delete(USER_BASE_PATH)
        .then(response => response.data);
}

const patchUserInfoRepository = async (port: IUserInfoPort): Promise<IUserDto> => {
    return BACKEND_HTTPS_SERVICES.patch(USER_BASE_PATH, port)
        .then(response => response.data);
}

const changeUserImageRepository = async (port: IUserImagePort): Promise<IUserDto> => {
    return BACKEND_HTTPS_SERVICES_FILE.patch(`${USER_BASE_PATH}image`, port)
        .then(response => response.data);
};

export {
    getUserInfoRepository,
    patchUserInfoRepository,
    changePasswordUserRepository,
    deleteUserRepository,
    changeUserImageRepository
};
