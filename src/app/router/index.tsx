import {createBrowserRouter} from "react-router-dom";
import { LazyMainPage, LazyEmailInput } from "@/pages";
import ERouterPath from "@/shared/common/enum/router";

const router = createBrowserRouter([
    {
        element: <LazyMainPage/>,
        path: ERouterPath.MAIN_PAGE
    },

    {
        element: <LazyEmailInput />,
        path: ERouterPath.RECOVERY,
    },
])
export default router
