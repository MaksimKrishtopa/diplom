import { createBrowserRouter } from "react-router-dom";
import { LazyMainPage, LazyEmailInput, LazyEmailConfirmation } from "@/pages";
import ERouterPath from "@/shared/common/enum/router";

const router = createBrowserRouter([
    {
        element: <LazyMainPage />,
        path: ERouterPath.MAIN_PAGE
    },
    {
        element: <LazyEmailInput />,
        path: ERouterPath.RECOVERY
    },
    {
        element: <LazyEmailConfirmation />,
        path: ERouterPath.RECOVERY_CONFIRMATION
    }
]);

export default router;
