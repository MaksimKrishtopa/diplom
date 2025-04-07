import {useForm} from "react-hook-form";
import {IResetPasswordEmailForm} from "@/shared/interface/enitites/user/form";
import {yupResolver} from "@hookform/resolvers/yup";
import useSendResetPasswordEmailUseCase from "@/entities/case/recovery/email-form/use-case";
import {resetPasswordEmailSchema} from "@/entities/case/recovery/email-form/schema";
import {useNavigate} from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";
import {AxiosError} from "axios";
import {EValidationErrorValues} from "@/shared/enum/error-values";

const useSendResetPasswordEmailPresenter = () => {
    const {mutateAsync} = useSendResetPasswordEmailUseCase()
    const navigate = useNavigate();

    const form = useForm<IResetPasswordEmailForm>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: yupResolver(resetPasswordEmailSchema)
    });
    const {register, formState: {errors}, handleSubmit} = form

    const handleSubmitCallback = handleSubmit(async (data: IResetPasswordEmailForm) => {
        await mutateAsync(data, {
            onSuccess: () => {
                localStorage.setItem("email", data.email)
                navigate(ERouterPath.RECOVERY_CONFIRMATION)
            },
            onError: (error: Error | AxiosError) => {
                if (error instanceof AxiosError && error.status === 404) {
                    form.setError('email', {type: 'custom', message: EValidationErrorValues.EMAIL_NOT_FOUND})
                }
            }
        })
    })

    return {
        register,
        errors,
        handleSubmit: handleSubmitCallback,
    }
};

export default useSendResetPasswordEmailPresenter;