import {ReactNode} from 'react';
import AuthorizationFormUser from "@/features/auth/form/user/authorization";

const AuthUserPage = (): ReactNode => {

    return (
        <div className="min-h-screen flex bg-[#D5E7FB] justify-center items-center">
            <AuthorizationFormUser/>
        </div>
    );
};

export default AuthUserPage;