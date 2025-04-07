import { createBrowserRouter } from "react-router-dom";
import {
    LazyMainPage,
    LazyEmailInput,
    LazyEmailConfirmation,
    LazyNewPassword,
    LazyRecoverySuccess,
    LazyAuthPage
} from "@/pages";
import ERouterPath from "@/shared/common/enum/router";
import GuestLayout from "@/app/common/layouts/guest";

const router = createBrowserRouter([
    {
        element: <LazyMainPage />,
        path: ERouterPath.MAIN_PAGE
    },
    {
        element: <GuestLayout/>,
        children: [
            {
                element: <LazyAuthPage/>,
                path: ERouterPath.LOGIN_PAGE,
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
            },
        ]
    }
]);

export default router;
