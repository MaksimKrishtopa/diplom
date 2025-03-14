import IUserDto from "@/shared/interface/user/dto/type.ts";
import IAuthPort from "@/shared/interface/user/port";
import BACKEND_HTTPS_SERVICES from "@/shared/config/axiosConfig.ts";


const getAuthorizeAdminRepository = async (port: IAuthPort): Promise<IUserDto> => {

    return BACKEND_HTTPS_SERVICES.post('/user/login', port)
        .then(response => response.data);
}

export {getAuthorizeAdminRepository};