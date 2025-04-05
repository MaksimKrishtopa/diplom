import {createBrowserRouter} from "react-router-dom";
import {LazyMainPage} from "@/pages";
import ERouterPath from "@/shared/common/enum/router";
import AuthUserPage from "@/pages/auth/index.tsx";
import CreatePostPage from "@/pages/posts/index.tsx";

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
        element: <CreatePostPage/>,
        path: ERouterPath.CREATE_POST,
    },

])
export default router
