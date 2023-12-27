import { Navigate, useRoutes } from "react-router-dom";
import { Home } from "../pages/home";
import { Header } from "../layouts/header";
import { Login } from "../pages/login";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      element: <Header />,
      children: [
        {
          path: "/",
          element: <Navigate to={"/home"} />,
        },
        {
          path: "/home",
          element: <Home />,
        },
      ],
    },
  ]);
  return routes;
};

export default Routes;
