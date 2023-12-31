import { Navigate, useRoutes } from "react-router-dom";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { NotFound } from "../pages/notFound";
import { MainLayout } from "../layouts/mainLayout";
import React from "react";
import About from "../pages/about/about";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Navigate to={"/home"} />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return routes;
};

export default Routes;
