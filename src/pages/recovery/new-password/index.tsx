import {ReactNode} from 'react';
import PasswordForm from '@/features/recovery/form/password-form';
import {recoveryPagesStyles} from "@/pages/recovery/style.ts";
import BackButton from "@/shared/components/buttons/back-button";
import CompassTrailTalesIcon from "@/shared/components/icons/logo/compass-trail-tales";

const NewPasswordPage = (): ReactNode => {
    return (
        <div className={recoveryPagesStyles.pageContainer}>
            <div className={recoveryPagesStyles.logoContainer}>
                <BackButton/>
                <CompassTrailTalesIcon/>
            </div>
            <div className={recoveryPagesStyles.contentContainer}>
                <div className={recoveryPagesStyles.textContainer}>
                    <h1 className={recoveryPagesStyles.title}>Новый пароль</h1>
                    <p className={recoveryPagesStyles.description}>Придумайте новый пароль</p>
                </div>
                <PasswordForm/>
            </div>
        </div>
    );
};

export default NewPasswordPage;
