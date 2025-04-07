import {ReactNode} from 'react';
import {recoveryConfirmFormStyles} from './style';
import Button from "@/shared/components/buttons/button";
import useSendResetPasswordCodePresenter from "@/entities/case/recovery/email-confirm/presenter";
import CodeInput from "@/shared/components/inputs/code/code.tsx";
import {recoveryFormGlobalStyles} from "../style.ts";

const RecoveryEmailConfirmationForm = (): ReactNode => {
    const {
        handleSubmit,
        isError,
        handleChangeInputValue,
        errors,
        handleSendCodeAgain,
        isSendEmailVisible
    } = useSendResetPasswordCodePresenter()

    return (
        <form onSubmit={handleSubmit} noValidate={true} className={recoveryFormGlobalStyles.form}>
            <CodeInput errorMessage={errors.code?.message} error={!!errors.code} onComplete={handleChangeInputValue}/>
            <Button type="submit" disabled={isError}>
                Отправить
            </Button>
            {isSendEmailVisible &&
                <button type='button' onClick={handleSendCodeAgain}
                        className={recoveryConfirmFormStyles.recoveryResendButton}>
                    Отправить код повторно
                </button>
            }
        </form>
    );
};

export default RecoveryEmailConfirmationForm;
