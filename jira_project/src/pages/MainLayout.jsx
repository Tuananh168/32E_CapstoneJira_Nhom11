import React, { useEffect } from "react";
import HeaderMain from "../layouts/HeaderMain";
import InfoMain from "../layouts/InfoMain";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";

import ProjectManagement from "./ProjectManagement/ProjectManagement";
import SideBar from "../layouts/SideBar";
import ContentCyberBugs from "../layouts/ContentMain";
import CreateProject from "./Create Project/CreateProject";
import MenuMain from "../layouts/MenuMain";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import _ from "lodash";

const MainLayout = (props) => {
  const { projectDetail } = useSelector((state) => state.ProjectReducer);
  console.log("projectDetail: ", projectDetail);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { UserLogin } = useSelector((state) => state.UserCyberBugsReducer);
  useEffect(() => {
    dispatch({
      type: "GET_PROJECT_DETAIL_SAGA",
      projectId: params.id,
    });
  }, []);

  if (_.isEmpty(UserLogin)) {
    navigate("/login", { replace: false });
  }
  return (
    <div>
      <div className="jira">
        {/* Sider Bar  */}
        <SideBar />
        {/* Menu */}
        <MenuMain />
        <div className="main">
          <HeaderMain projectDetail={projectDetail} />
          <InfoMain members={projectDetail.members} />
          <Routes>
            <Route path="/cyberBugs/:id" element={<ContentCyberBugs />} />
            <Route path="/createproject" element={<CreateProject />} />
            <Route path="/projectManagement" element={<ProjectManagement />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
