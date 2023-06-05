import { createBrowserRouter, Navigate } from "react-router-dom";

import Home from "./views/Home";
import Location from "./views/Location";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Activate from "./containers/Activate";
import ResetPassword from "./containers/ResetPassword";
import ResetPasswordConfirm from "./containers/ResetPasswordConfirm";
import FirstPage from "./containers/FirstPage";

const router = createBrowserRouter([

    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/reset-password", element: <ResetPassword /> },
    { path: "/password/reset/confirm/:uid/:token", element: <ResetPasswordConfirm /> },
    { path: "/activate/:uid/:token", element: <Activate /> },
    { path: "/firstpage", element: <FirstPage /> },
    { path: "/location", element: <Location /> },
    { path: "*", element: <Navigate to="/" /> },
])

export default router;
