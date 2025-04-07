import {ReactNode} from 'react';
import CompassTrailTalesIcon from "@/shared/components/icons/logo/compass-trail-tales";
import RecoveryEmailInputForm from "@/features/recovery/form/email-form";
import {recoveryPagesStyles} from "../style.ts";

const EmailInputPage = (): ReactNode => {
    return (
        <div className={recoveryPagesStyles.pageContainer}>
            <CompassTrailTalesIcon/>
            <div className={recoveryPagesStyles.contentContainer}>
                <h1 className={recoveryPagesStyles.title}>Забыли пароль?</h1>
                <RecoveryEmailInputForm/>
            </div>
        </div>
    );
};

export default EmailInputPage;