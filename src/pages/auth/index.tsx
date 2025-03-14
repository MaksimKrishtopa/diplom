import React,{ReactNode} from 'react';
import {formContainerStyles, pageContainerAuthStyles} from "@/pages/auth/index.ts";
import BackgroundLogin from "@/widget/background-login";
import AuthorizationFormUser from "@/features/auth/form/user";

const AuthUserPage:React.FC = (): ReactNode => {

    return (
        <div className={pageContainerAuthStyles()}>
            <div className={formContainerStyles()}>
                <BackgroundLogin/>
                <div className="flex">
                    <AuthorizationFormUser/>
                </div>
            </div>
        </div>
    );
};

export default AuthUserPage;