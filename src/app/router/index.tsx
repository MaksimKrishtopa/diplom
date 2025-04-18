import { createBrowserRouter } from "react-router-dom";
import { LazyMainPage, LazyLoginPage, LazyRegisterPage, LazyCreatePostPage, LazyPreviewPostPage, LazyPostPageDetail } from "@/pages";
import ERouterPath from "@/shared/common/enum/router";

const router = createBrowserRouter([
  {
    path: ERouterPath.MAIN_PAGE,
    element: <LazyMainPage />,
  },
  {
    path: ERouterPath.LOGIN_PAGE,
    element: <LazyLoginPage />,
  },
  {
    path: ERouterPath.REGISTER_PAGE,
    element: <LazyRegisterPage />,
  },
  {
    path: ERouterPath.CREATE_POST,
    element: <LazyCreatePostPage />,
  },
  {
    path: ERouterPath.PREVIEW_POST,
    element: <LazyPreviewPostPage />,
  },
  {
    path: ERouterPath.POST_DETAIL,
    element: <LazyPostPageDetail />,
  },
]);

export default router;
