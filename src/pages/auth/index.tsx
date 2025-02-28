import {ReactNode} from 'react';
import AuthorizationFormUser from "@/features/auth/form/user/authorization";
import {backgroundShapes} from "@/shared/icon";

const AuthUserPage = (): ReactNode => {

    return (
        <div className="relative w-full min-h-screen flex justify-center items-center p-4">
            <div
                className="absolute inset-0  blur-sm bg-cover"
                style={{backgroundImage: `url(${backgroundShapes})`}}
            ></div>
            <div className="relative z-10 w-full">
                <AuthorizationFormUser/>
            </div>
        </div>
    );
};

export default AuthUserPage;