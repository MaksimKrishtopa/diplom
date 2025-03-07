import {redirect} from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";

export const checkAuth = () => {
    const token = localStorage.getItem('userToken');
    if (!token) {
        throw redirect(ERouterPath.LOGIN_PAGE);
    }
    return null;
};