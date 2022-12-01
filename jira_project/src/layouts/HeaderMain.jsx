import React from "react";

const HeaderMain = () => {
  return (
    <div>
      <div>
        <div className="header">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb" style={{ backgroundColor: "white" }}>
              <li className="breadcrumb-item">Project</li>
              <li className="breadcrumb-item">CyberLearn</li>
              <li className="breadcrumb-item active" aria-current="page">
                Cyber Board
              </li>
            </ol>
          </nav>
        </div>
        <h3>Cyber Board</h3>
      </div>
    </div>
  );
};

export default HeaderMain;
