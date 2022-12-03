import React from "react";

const HeaderMain = (props) => {
  const { projectDetail } = props;
  return (
    <div>
      <div>
        <div className="header">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb" style={{ backgroundColor: "white" }}>
              <li className="breadcrumb-item">Project</li>
              <li className="breadcrumb-item">Project Management</li>
              <li className="breadcrumb-item active" aria-current="page">
                {projectDetail.projectName}
              </li>
            </ol>
          </nav>
        </div>
        <h3 className="text-2xl font-bold">{projectDetail.projectName}</h3>
      </div>
    </div>
  );
};

export default HeaderMain;
