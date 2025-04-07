import {ReactNode} from 'react';
import AuthorizationFormUser from "@/features/auth/form/user";
import {makeClassname} from "@/shared/utils/functions/classname";
import CompassTrailTalesIcon from "@/shared/components/icons/logo/compass-trail-tales";
import {authPageStyles} from "@/pages/auth/style.ts";

const AuthUserPage = (): ReactNode => {
    return (
        <div className={makeClassname(authPageStyles.flexColumn, authPageStyles.pageContainer)}>
            <CompassTrailTalesIcon/>
            <div className={makeClassname(authPageStyles.flexColumn, authPageStyles.contentContainer)}>
                <h1 className={authPageStyles.title}>Вход в систему</h1>
                <AuthorizationFormUser/>
            </div>
        </div>
    );
};

export default AuthUserPage;