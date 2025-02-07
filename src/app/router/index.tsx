import {createBrowserRouter} from "react-router-dom";
import {LazyMainPage} from "@/pages";
import ERouterPath from "@/shared/common/enum/router";

const router = createBrowserRouter([
    {
        element: <LazyMainPage/>,
        path: ERouterPath.MAIN_PAGE
    },
])
export default router
