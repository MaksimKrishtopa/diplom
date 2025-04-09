import useGetUserInfoUseCase from "@/entities/case/user/personal-acoount/get-info/use-case";
import {IUserDto} from "@/shared/interface/enitites/user/dto/type.ts";


interface IUserInfoPresenterReturn {
    isLoading: boolean;
    data: IUserDto | undefined;
    error: Error | null
}


const useUserInfoPresenter = ():IUserInfoPresenterReturn => {
    const { data, isLoading, error } = useGetUserInfoUseCase();

    return {
        data,
        isLoading,
        error,
    };
};

export default useUserInfoPresenter;
