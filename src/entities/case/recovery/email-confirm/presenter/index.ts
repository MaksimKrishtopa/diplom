import {useForm} from "react-hook-form";
import {IResetPasswordCodeForm} from "@/shared/interface/enitites/user/form";
import {yupResolver} from "@hookform/resolvers/yup";
import useSendResetPasswordCodeUseCase from "@/entities/case/recovery/email-confirm/use-case";
import {resetPasswordCodeSchema} from "@/entities/case/recovery/email-confirm/schema";
import {useNavigate} from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";
import {AxiosError} from "axios";
import {EValidationErrorValues} from "@/shared/enum/error-values";
import {useEffect, useState} from "react";
import useSendResetPasswordEmailUseCase from "@/entities/case/recovery/email-form/use-case";

const useSendResetPasswordCodePresenter = () => {
    const {mutateAsync} = useSendResetPasswordCodeUseCase()
    const { mutateAsync: mutateAsyncEmail } = useSendResetPasswordEmailUseCase()
    const navigate = useNavigate();
    const [isError, setIsError] = useState<boolean>(false)
    const [isSendEmailVisible, setIsSendEmailVisible] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            setIsSendEmailVisible(true)
        }, 50000)
    })

    const form = useForm<IResetPasswordCodeForm>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: yupResolver(resetPasswordCodeSchema)
    });

    const {clearErrors, setValue, formState: {errors}, handleSubmit} = form

    const handleSubmitCallback = handleSubmit(async (data) => {
        const email = localStorage.getItem('email')
        const password = 'qwe123asd'
        if (email) {
            await mutateAsync({email, password, ...data}, {
                onSuccess: () => {
                    localStorage.setItem("code", data.code)
                    navigate(ERouterPath.RECOVERY_NEW_PASSWORD)
                },
                onError: (error: Error | AxiosError) => {
                    if (error instanceof AxiosError) {
                        if (error.status === 404 && error.response?.data.property === 'code') {
                            setIsError(!isError)
                            form.setError('code', {type: 'custom', message: EValidationErrorValues.INCORRECT_CODE})
                        }
                    }
                }
            })
        }
    })

    const handleChangeInputValue = (code: string) => {
        clearErrors('code')
        setIsError(false)
        setValue('code', code)
    }

    const handleSendCodeAgain = async () => {
        const email = localStorage.getItem('email')
        if (email) {
            await mutateAsyncEmail({email})
        }
    }

    return {
        handleSubmit: handleSubmitCallback,
        isError,
        handleChangeInputValue,
        handleSendCodeAgain,
        errors,
        isSendEmailVisible
    }
};

export default useSendResetPasswordCodePresenter;