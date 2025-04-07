import {ReactNode} from 'react';
import BackButton from "@/shared/components/buttons/back-button";
import {recoveryPagesStyles} from "@/pages/recovery/style.ts";
import CompassTrailTalesIcon from "@/shared/components/icons/logo/compass-trail-tales";
import RecoveryEmailConfirmationForm from "@/features/recovery/form/confirm-form";

const EmailConfirmPage = (): ReactNode => {
    return (
        <div className={recoveryPagesStyles.pageContainer}>
            <div className={recoveryPagesStyles.logoContainer}>
                <BackButton/>
                <CompassTrailTalesIcon/>
            </div>
            <div className={recoveryPagesStyles.contentContainer}>
                <div className={recoveryPagesStyles.textContainer}>
                    <h1 className={recoveryPagesStyles.title}>Подтверждение почты</h1>
                    <p className={recoveryPagesStyles.description}>Введите код из письма</p>
                </div>
                <RecoveryEmailConfirmationForm/>
            </div>
        </div>
    );
};

export default EmailConfirmPage;