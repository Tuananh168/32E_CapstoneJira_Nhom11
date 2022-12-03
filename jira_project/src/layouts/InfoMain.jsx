import React from "react";

const InfoMain = (props) => {
  const renderAvatar = () => {
    return props.members?.map((user, index) => {
      return (
        <div key={index} className="avatar">
          <img src={user.avatar} alt={user.avatar} />
        </div>
      );
    });
  };

  return (
    <div>
      <div className="info" style={{ display: "flex" }}>
        <div className="search-block">
          <input className="search" />
          <i className="fa fa-search" />
        </div>
        <div className="avatar-group" style={{ display: "flex" }}>
          {renderAvatar()}
        </div>
        <div style={{ marginLeft: 20 }} className="text">
          Only My Issues
        </div>
        <div style={{ marginLeft: 20 }} className="text">
          Recently Updated
        </div>
      </div>
    </div>
  );
};

export default InfoMain;
