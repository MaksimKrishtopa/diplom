import BACKEND_HTTPS_SERVICES from "@/shared/api/backend";
import {ICreatePostPort} from "@/shared/interface/enitites/post/port";
import {IPostDto, IThemeDto} from "@/shared/interface/enitites/post/dto";

const createPostRepository = async (post: ICreatePostPort): Promise<IPostDto> => {
    return BACKEND_HTTPS_SERVICES.post('/posts', post)
        .then(res => res.data);
};

const fetchThemesRepository = async (): Promise<IThemeDto[]> => {
    return BACKEND_HTTPS_SERVICES.get('/themes')
        .then(res => res.data);
};

export {createPostRepository, fetchThemesRepository};
