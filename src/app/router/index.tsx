import {createBrowserRouter} from "react-router-dom";
import {LazyMainPage} from "@/pages";
import ERouterPath from "@/shared/common/enum/router";
import AuthUserPage from "@/pages/auth";
import HomePage from "@/pages/home";
import {checkAuth} from "@/shared/check";

const router = createBrowserRouter([
    {
        element: <LazyMainPage/>,
        path: ERouterPath.MAIN_PAGE,
    },
    {
        element: <AuthUserPage/>,
        path: ERouterPath.LOGIN_PAGE,
    },
    {
        element: <HomePage/>,
        path: ERouterPath.HOME_PAGE,
        loader:checkAuth
    }
])
export default router
