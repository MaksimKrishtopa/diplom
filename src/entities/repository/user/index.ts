import IAdminDto from "@/shared/interface/user/dto/type.ts";
import IAuthPort from "@/shared/interface/user/port";
import BACKEND_HTTPS_SERVICES from "@/shared/config/axiosConfig.ts";


const getAuthorizeAdminRepository = async (formData: IAuthPort): Promise<IAdminDto> => {

    return BACKEND_HTTPS_SERVICES.post('/user/login', formData)
        .then((response) => {
            return response.data
        })
}

export default getAuthorizeAdminRepository;