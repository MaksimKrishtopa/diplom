import BACKEND_HTTPS_SERVICES from "@/shared/api/backend.ts";
import {IUserDto} from "@/shared/interface/enitites/user/dto/type.ts";
import {IAuthPort} from "@/shared/interface/enitites/user/port";

const getAuthorizeUserRepository = async (port: IAuthPort): Promise<IUserDto> => {

    return BACKEND_HTTPS_SERVICES.post('/user/login', port)
        .then(response => response.data);
}

export {getAuthorizeUserRepository};