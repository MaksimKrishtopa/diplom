import {useContext} from "react";
import {UserAuthContext} from "@/app/provider/context";
import {Navigate,Outlet} from "react-router-dom";


interface IGuardProps {
    navigateToFail?: string
}

const AuthGuard = ({navigateToFail = '/'}: IGuardProps) => {
    const {isAuthenticated} = useContext(UserAuthContext)
    if (isAuthenticated) return <Outlet />
    return <Navigate to={navigateToFail}/>
}

const GUARDS = {
    AuthGuard
}

export {GUARDS}