import {ReactNode} from 'react';
import {formContainer} from "@/pages/auth/style";
import BackgroundLogin from "@/widget/background-login";
import AuthorizationFormUser from "@/features/auth/form/user";

const AuthUserPage = (): ReactNode => {

    return (
        <div className={formContainer.pageContainerAuthStyles}>
            <div className={formContainer.formContainerStyles}>
                <BackgroundLogin/>
                <div className={formContainer.ContainerAuthStyles}>
                    <AuthorizationFormUser/>
                </div>
            </div>
        </div>
    );
};

export default AuthUserPage;