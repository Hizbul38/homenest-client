import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from "../Layouts/HomeLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
  {
    path: "/contact",
    element: <div>Contact</div>,
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path:"/auth/login",
        element: <Login></Login>,
      },
      {
        path:"/auth/register",
        element:<Register></Register>,
      },
    ]
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
]);

export default router;