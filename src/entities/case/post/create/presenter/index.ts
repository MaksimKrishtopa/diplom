import {useCreatePostUseCase, useThemesUseCase} from "@/entities/case/post/create/index";
import {useForm} from "react-hook-form";
import { useState } from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import {postSchema} from "@/shared/lib/schema/post/create/index";
import {ICreatePostForm} from "@/shared/interface/enitites/post/form";
import {ICreatePostPort} from "@/shared/interface/enitites/post/port";
import {useNavigate} from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";

const useCreatePostPresenter = () => {
    const {mutateAsync} = useCreatePostUseCase();
    const {data: themes, isLoading: isThemesLoading} = useThemesUseCase();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
      } = useForm<ICreatePostForm>();
      

    const onSubmit = async (data: ICreatePostForm) => {
        const payload: ICreatePostPort = {
            image: data.image,
            text: data.text,
            location: data.location,
            theme_ids: data.theme_ids,
        };

        await mutateAsync(payload, {
            onSuccess: () => navigate(ERouterPath.MAIN_PAGE)
        });
    };

    return {
        register,
        handleSubmit,
        setValue,
        errors,
        onSubmit,
        themes,
        isThemesLoading
      };
};

export default useCreatePostPresenter;
