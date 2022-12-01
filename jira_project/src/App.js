import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Router from "./Router/Router"
import "./index.css"
import MainLayout from "./pages/MainLayout";
import ContentMain from "./layouts/ContentMain";
import ProjectSetting from "./pages/projectSetting/ProjectSetting";
import Login from "./pages/login/Login";
import ModalProject from "./HOC/ModalProject";



function App() {
  return (
    <div>
      <ModalProject />
      <Router />
    </div>
  );
}

export default App;
