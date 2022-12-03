import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ContentCyberBugs = (props) => {
  const { projectDetail } = useSelector((state) => state.ProjectReducer);
  console.log("projectDetail: ", projectDetail);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "GET_PROJECT_DETAIL_SAGA",
      projectId: params.id,
    });
  }, []);

  const renderCardTaskList = () => {
    return projectDetail.lstTask?.map((item, index) => {
      return (
        <div
          key={index}
          className="card"
          style={{ width: "17rem", height: "atuo" }}
        >
          <div className="card-header">{item.statusName}</div>
          <ul className="list-group list-group-flush">
            {item.lstTaskDeTail?.map((task, index) => {
              return (
                <li
                  key={index}
                  className="list-group-item"
                  data-toggle="modal"
                  data-target="#infoModal"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    dispatch({
                      type: "GET_TASK_DETAIL_SAGA",
                      taskId: task.taskId,
                    });
                  }}
                >
                  <p className="fw-bold">{task.taskName}</p>
                  <div className="block" style={{ display: "flex" }}>
                    <div className="block-left">
                      <p className="text-red-600 fw-bolder">
                        {task.priorityTask.priority}
                      </p>
                      {/* <i className="fa fa-bookmark" />
                      <i className="fa fa-arrow-up" /> */}
                    </div>
                    <div className="block-right">
                      <div className="avatar-group" style={{ display: "flex" }}>
                        {task.assigness?.map((mem, index) => {
                          return (
                            <div key={index} className="avatar">
                              <img src={mem.avatar} alt="1" />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}

            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      );
    });
  };

  return (
    <div className="content" style={{ display: "flex" }}>
      {renderCardTaskList()}
      {/* <div className="card" style={{ width: "17rem", height: "25rem" }}>
        <div className="card-header">SELECTED FOR DEVELOPMENT 2</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
        </ul>
      </div>
      <div className="card" style={{ width: "17rem", height: "25rem" }}>
        <div className="card-header">IN PROGRESS 2</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
        </ul>
      </div>
      <div className="card" style={{ width: "17rem", height: "25rem" }}>
        <div className="card-header">DONE 3</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
      </div> */}
    </div>
  );
};

export default ContentCyberBugs;
