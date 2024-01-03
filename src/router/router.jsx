import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../components/BaseLayout";
import ErrorBoundary from "../components/ErrorBoundary";
import Home from "../pages/Home";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            // 登录注册页面
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
]);

export default router;