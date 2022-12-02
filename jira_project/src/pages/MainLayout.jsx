import React from "react";
import HeaderMain from "../layouts/HeaderMain";
import InfoMain from "../layouts/InfoMain";
import { NavLink, Route, Routes } from "react-router-dom";

import ProjectManagement from "./ProjectManagement/ProjectManagement";
import SideBar from "../layouts/SideBar";
import ContentCyberBugs from "../layouts/ContentMain";
import CreateProject from "./Create Project/CreateProject";

const MainLayout = () => {
  return (
    <div>
      <div className="jira">
        {/* Sider Bar  */}
        <SideBar />
        {/* Menu */}
        <div className="menu">
          <div className="account">
            <div className="avatar">
              <img src={require("../assets/img/logo.jfif")} alt="logo" />
            </div>
            <div className="account-info">
              <p>CyberLearn.vn</p>
              <p>Report bugs</p>
            </div>
          </div>
          <div className="control">
            <NavLink
              to="/cyberBugs"
              style={{ display: "block" }}
              className="mb-3"
              activeClassName="active font-weight-bold"
            >
              <i className="fa fa-credit-card mr-1" />
              <span>Cyber Board</span>
            </NavLink>
            <NavLink
              to="/projectManagement"
              className="mb-3"
              activeStyle="active font-weight-bold"
            >
              <i className="fa fa-cog mr-1" />
              <span>Project Management</span>
            </NavLink>
            <NavLink
              to="/createproject"
              className="my-3"
              style={{ display: "block" }}
              activeStyle="active font-weight-bold"
            >
              <i className="fa fa-cog mr-1" />
              <span>Create Project</span>
            </NavLink>
          </div>
          <div className="feature">
            <div>
              <i className="fa fa-truck mr-1" />
              <span>Releases</span>
            </div>
            <div>
              <i className="fa fa-equals mr-1" />
              <span>Issues and filters</span>
            </div>
            <div>
              <i className="fa fa-paste mr-1" />
              <span>Pages</span>
            </div>
            <div>
              <i className="fa fa-location-arrow mr-1" />
              <span>Reports</span>
            </div>
            <div>
              <i className="fa fa-box mr-1" />
              <span>Components</span>
            </div>
          </div>
        </div>
        <div className="main">
          <HeaderMain />
          <InfoMain />
          <Routes>
            <Route path="/cyberBugs" element={<ContentCyberBugs />} />
            <Route path="/createproject" element={<CreateProject />} />
            <Route path="/projectManagement" element={<ProjectManagement />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
