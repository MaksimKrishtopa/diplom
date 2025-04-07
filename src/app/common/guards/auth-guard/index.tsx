import IGuardProps from "@/shared/interface/state/guard";
import {useContext} from "react";
import {UserAuthContext} from "@/app/provider/context";
import {Navigate, Outlet} from "react-router-dom";

const AuthGuard = ({navigateToFail = '/'}: IGuardProps) => {
    const {isAuthenticated} = useContext(UserAuthContext)
    if (isAuthenticated) return <Outlet />
    return <Navigate to={navigateToFail}/>
}

export {AuthGuard}