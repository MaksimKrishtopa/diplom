import {useForm} from "react-hook-form";
import {IUserResetPasswordForm} from "@/shared/interface/enitites/user/form";
import {yupResolver} from "@hookform/resolvers/yup";
import useUserResetPasswordUseCase from "@/entities/case/recovery/reset-password/use-case";
import {resetPasswordSchema} from "@/entities/case/recovery/reset-password/schema";
import {useNavigate} from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";
import {AxiosError} from "axios";
import {EValidationErrorValues} from "@/shared/enum/error-values";

const useUserResetPasswordPresenter = () => {
    const {mutateAsync} = useUserResetPasswordUseCase()
    const navigate = useNavigate();

    const form = useForm<IUserResetPasswordForm>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: yupResolver(resetPasswordSchema)
    });
    const {register, formState: {errors}, handleSubmit} = form

    const handleSubmitCallback = handleSubmit(async (data) => {
        const email = localStorage.getItem('email')
        const code = localStorage.getItem('code')
        if (code && email) {
            await mutateAsync({code, email, ...data}, {
                onSuccess: (data) => {
                    localStorage.removeItem('email')
                    localStorage.removeItem('code')
                    localStorage.setItem('token', data.accessToken)
                    localStorage.setItem('id', data.id)
                    navigate(ERouterPath.RECOVERY_SUCCESS)
                },
                onError: (error: Error | AxiosError) => {
                    if (error instanceof AxiosError && error.status === 409 && error.response?.data.property === 'password') {
                        form.setError('password', {type: 'custom', message: EValidationErrorValues.PASSWORD_NOT_UNIQUE})
                    }
                }
            })
        }
    })

    return {
        handleSubmit: handleSubmitCallback,
        register,
        errors
    }
};

export default useUserResetPasswordPresenter;