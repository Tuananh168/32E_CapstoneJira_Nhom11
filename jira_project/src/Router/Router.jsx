import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import ContentMain from "../layouts/ContentMain";

import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import MainLayout from "../pages/MainLayout";
import ProjectManagement from "../pages/ProjectManagement/ProjectManagement";
import ProjectSetting from "../pages/projectSetting/ProjectSetting";
import ContentCyberBugs from "../layouts/ContentMain";

const Router = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/cyberBugs",
          element: <ContentCyberBugs />,
        },
        {
          path: "/projectSetting",
          element: <ProjectSetting />,
        },
        {
          path: "/projectManagement",
          element: <ProjectManagement />,
        },
      ],
    },
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
