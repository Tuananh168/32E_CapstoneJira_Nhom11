import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import ContentMain from "../layouts/ContentMain";

import Home from "../pages/home/Home";
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
    {
      path: "/home",
      element: <Home />,
    },
  ]);
  return routing;
};

export default Router;
