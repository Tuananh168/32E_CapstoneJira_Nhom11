import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import ContentMain from "../layouts/ContentMain";

import Login from "../pages/login/Login";
import MainLayout from "../pages/MainLayout";
import ProjectManagement from "../pages/ProjectManagement/ProjectManagement";

import ContentCyberBugs from "../layouts/ContentMain";
import CreateProject from "../pages/Create Project/CreateProject";
import SignUp from "../pages/signUp/SignUp";

const Router = () => {
  const routing = useRoutes([
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/cyberBugs/:id",
          element: <ContentCyberBugs />,
        },
        {
          path: "/createproject",
          element: <CreateProject />,
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
  ]);
  return routing;
};

export default Router;
