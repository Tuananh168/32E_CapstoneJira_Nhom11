import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

const Router = (props) => {
  const routing = useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);
  return routing;
};

export default Router;
