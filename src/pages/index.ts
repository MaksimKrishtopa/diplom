import {lazy} from "react";
import {LoadComponent} from "@/shared/components/lazy-load";

const LazyMainPage = LoadComponent(lazy(async () => import("@/pages/main")));
const LazyEmailInput = LoadComponent(lazy(() => import("@/pages/recovery/email-input")));
const LazyEmailConfirmation = LoadComponent(lazy(() => import("@/pages/recovery/email-confirm")));
const LazyNewPassword = LoadComponent(lazy(() => import("@/pages/recovery/new-password")));
const LazyRecoverySuccess = LoadComponent(lazy(() => import("@/pages/recovery/recovery-success")));
const LazyAuthPage = LoadComponent(lazy(async () => import("@/pages/auth")))

export {
    LazyMainPage,
    LazyEmailInput,
    LazyEmailConfirmation,
    LazyNewPassword,
    LazyRecoverySuccess,
    LazyAuthPage
}