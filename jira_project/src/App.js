import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Router from "./Router/Router"
import "./index.css"

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
