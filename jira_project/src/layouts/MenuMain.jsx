import React from "react";
import { NavLink } from "react-router-dom";

const MenuMain = () => {
  return (
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
        <NavLink to="/projectManagement" className="mb-3">
          <i className="fa fa-cog mr-1" />
          <span>Project Management</span>
        </NavLink>
        <NavLink
          to="/createproject"
          className="my-3"
          style={{ display: "block" }}
        >
          <i className="fa fa-cog mr-1" />
          <span>Create Project</span>
        </NavLink>
      </div>
      <div className="feature">
        <div className="cursor-not-allowed select-none">
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
  );
};

export default MenuMain;
