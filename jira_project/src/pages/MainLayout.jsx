import React from "react";
import HeaderMain from "../layouts/HeaderMain";
import InfoMain from "../layouts/InfoMain";
import { Link, Route, Routes } from "react-router-dom";
import ProjectSetting from "./projectSetting/ProjectSetting";
import ProjectManagement from "./ProjectManagement/ProjectManagement";
import SideBar from "../layouts/SideBar";
import ContentCyberBugs from "../layouts/ContentMain";

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
            <Link to="/cyberBugs" style={{ display: "block" }} className="mb-3">
              <i className="fa fa-credit-card mr-1" />
              <span>Cyber Board</span>
            </Link>
            <Link to="/projectManagement" className="mb-3">
              <i className="fa fa-cog mr-1" />
              <span>Project Management</span>
            </Link>
            <Link
              to="/projectSetting"
              className="my-3"
              style={{ display: "block" }}
            >
              <i className="fa fa-cog mr-1" />
              <span>Project Settings</span>
            </Link>
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
            <Route path="/projectSetting" element={<ProjectSetting />} />
            <Route path="/projectManagement" element={<ProjectManagement />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
