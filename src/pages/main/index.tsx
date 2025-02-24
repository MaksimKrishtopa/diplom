import {ReactNode} from 'react';
import AuthorizationForm from "@/features/auth/form/admin/authorization/index.tsx";

const MainPage = (): ReactNode => {

    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello!
            </h1>
            <AuthorizationForm/>
        </div>
    );
};

export default MainPage;
