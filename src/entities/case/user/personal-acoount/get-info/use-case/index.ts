import { useQuery, UseQueryResult} from "@tanstack/react-query";
import {getUserInfoRepository} from "@/entities/repository/user/personal-account";
import EMutationValues from "@/shared/enum/mutation-key";
import {IUserDto} from "@/shared/interface/enitites/user/dto/type.ts";

const useGetUserInfoUseCase = ():UseQueryResult<IUserDto, Error> => {
    const execute = async (): Promise<IUserDto> => {
        return getUserInfoRepository();
    };

    return useQuery({
        queryFn:execute,
        queryKey:[EMutationValues.KEY_INFO],
    });
};


export default useGetUserInfoUseCase;
