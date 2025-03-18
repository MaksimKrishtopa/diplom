import { createBrowserRouter } from "react-router-dom";
import { LazyMainPage, LazyEmailInput, LazyEmailConfirmation, LazyNewPassword, LazyRecoverySuccess } from "@/pages";
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
    },
    {
        element: <LazyNewPassword />,
        path: ERouterPath.RECOVERY_NEW_PASSWORD
    },
    {
        element: <LazyRecoverySuccess />,
        path: ERouterPath.RECOVERY_SUCCESS
    }
]);

export default router;
