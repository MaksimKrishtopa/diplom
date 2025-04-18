import {lazy} from "react";
import {LoadComponent} from "@/shared/components/lazy-load";
export const LazyMainPage = LoadComponent(lazy(async () => import("@/pages/main")));
export const LazyLoginPage = LoadComponent(lazy(async () => import("@/pages/login")));
export const LazyRegisterPage = LoadComponent(lazy(async () => import("@/pages/register")));
export const LazyCreatePostPage = LoadComponent(lazy(async () => import("@/pages/create-post")));
export const LazyPreviewPostPage = LoadComponent(lazy(async () => import("@/pages/post-preview")));
export const LazyPostPageDetail = LoadComponent(lazy(async () => import("@/pages/page-detail")));
