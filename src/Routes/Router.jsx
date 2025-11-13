import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from "../Layouts/HomeLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AlProperties from "../Pages/AllProperties";
import AddProperties from "../Pages/AddProperties";
import PrivateRoute from "./PrivateRoute";
import PropertyDetails from "../Components/PropertyDetails";
import MyProperties from "../Pages/MyProperties";
import UpdateProperty from "../Pages/UpdateProperty";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/all-properties",
        element:<AlProperties></AlProperties>,
        loader:() => fetch('http://localhost:3000/properties')
      },
      {
        path: "/add-properties",
        element:(
          <PrivateRoute>
            <AddProperties></AddProperties>
          </PrivateRoute>
        ),
      },
      {
        path:"/property/:id",
        element: (
          <PrivateRoute>
            <PropertyDetails></PropertyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/properties/${params.id}`),
      },
      {
        path: "/my-properties",
        element: (
          <PrivateRoute>
           <MyProperties></MyProperties>
         </PrivateRoute>
        ),
      },
      {
         path: "/update-property/:id",
         element: (
         <PrivateRoute>
           <UpdateProperty></UpdateProperty>
         </PrivateRoute>
  ),
},

    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;