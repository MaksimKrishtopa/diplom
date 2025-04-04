import {lazy} from "react";
import {LoadComponent} from "@/shared/components/lazy-load";

export const LazyMainPage = LoadComponent(lazy(async () => import("@/pages/main")))
export const AuthMainPage = LoadComponent(lazy(async () => import("@/pages/auth/index")))