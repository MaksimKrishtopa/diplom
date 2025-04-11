import {useMutation, useQuery} from "@tanstack/react-query";
import {createPostRepository, fetchThemesRepository} from "@/entities/repository/post/create";
import EMutationValues from "@/shared/enum/mutation-key";
import {ICreatePostPort} from "@/shared/interface/enitites/post/port";
import {IPostDto, IThemeDto} from "@/shared/interface/enitites/post/dto";

export const useCreatePostUseCase = () =>
    useMutation<IPostDto, Error, ICreatePostPort>({
        mutationKey: [EMutationValues.KEY_CREATE_POST],
        mutationFn: createPostRepository
    });

export const useThemesUseCase = () =>
    useQuery<IThemeDto[], Error>({
        queryKey: ['themes'],
        queryFn: fetchThemesRepository
    });
