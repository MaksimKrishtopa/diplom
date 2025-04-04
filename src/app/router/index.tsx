import {createBrowserRouter} from "react-router-dom";
import {LazyMainPage} from "@/pages";
import ERouterPath from "@/shared/common/enum/router";
import AuthUserPage from "@/pages/auth/index.tsx";

const router = createBrowserRouter([
    {
        element: <LazyMainPage/>,
        path: ERouterPath.MAIN_PAGE,
    },
    {
        element: <AuthUserPage/>,
        path: ERouterPath.LOGIN_PAGE,
    },

])
export default router
