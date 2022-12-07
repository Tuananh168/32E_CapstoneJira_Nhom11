import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactHtmlParser from "html-react-parser";
import { Editor } from "@tinymce/tinymce-react";
import { Select } from "antd";

const ModalTask = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "GET_PRIORITY_SAGA",
    });
    dispatch({
      type: "GET_STATUS_SAGA",
    });
    dispatch({
      type: "TASK_TYPE_SAGA",
    });
  }, []);

  const { taskDetailModal } = useSelector((state) => state.TaskDetailReducer);
  console.log("taskDetailModal: ", taskDetailModal);

  const { arrPriority } = useSelector((state) => state.PriorityReducer);

  const { arrStatus } = useSelector((state) => state.StatusReducer);

  const { arrTaskType } = useSelector((state) => state.TaskTypeReducer);
  const { projectDetail } = useSelector((state) => state.ProjectReducer);
  console.log("projectDetail: ", projectDetail);

  const [visibleEditor, setVisibleEditor] = useState(false);
  const [historyContent, sethistoryContent] = useState(
    taskDetailModal.description
  );
  const [content, setContent] = useState(taskDetailModal.description);
  const renderDescription = () => {
    const jsxDescription = ReactHtmlParser(taskDetailModal.description);
    return (
      <div>
        {visibleEditor ? (
          <div>
            <Editor
              name="description"
              initialValue={taskDetailModal.description}
              onEditorChange={(content, editor) => {
                setContent(content);
              }}
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  "a11ychecker",
                  "advlist",
                  "advcode",
                  "advtable",
                  "autolink",
                  "checklist",
                  "export",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "powerpaste",
                  "fullscreen",
                  "formatpainter",
                  "insertdatetime",
                  "media",
                  "table",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | casechange blocks | bold italic backcolor | " +
                  "alignleft aligncenter alignright alignjustify | " +
                  "bullist numlist checklist outdent indent | removeformat | a11ycheck code table help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
            <button
              className="btn btn-primary"
              onClick={() => {
                setVisibleEditor(false);
                dispatch({
                  type: "CHANGE_TASK_MODAL",
                  name: "description",
                  value: content,
                });
              }}
            >
              Save
            </button>
            <button
              className="btn btn-light"
              onClick={() => {
                setVisibleEditor(false);
                dispatch({
                  type: "CHANGE_TASK_MODAL",
                  name: "description",
                  value: historyContent,
                });
              }}
            >
              Cancel
            </button>
          </div>
        ) : (
          <div
            onClick={() => {
              setVisibleEditor(!visibleEditor);
              sethistoryContent(taskDetailModal.description);
            }}
          >
            {jsxDescription}
          </div>
        )}
      </div>
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name", name);
    console.log("value", value);
    dispatch({
      type: "CHANGE_TASK_MODAL",
      name: name,
      value: value,
    });
  };

  const renderTimeTracking = () => {
    <p>abc</p>;
    const { timeTrackingSpent, timeTrackingRemaining } = taskDetailModal;
    const max = Number(timeTrackingSpent) + Number(timeTrackingRemaining);
    const percent = Math.round((Number(timeTrackingSpent) / max) * 100);

    return (
      <div>
        <div style={{ display: "flex" }}>
          <i className="fa fa-clock" />
          <div style={{ width: "100%" }}>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${percent}%` }}
                aria-valuenow={Number(timeTrackingSpent)}
                aria-valuemin={Number(timeTrackingRemaining)}
                aria-valuemax={max}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p className="logged">{Number(timeTrackingSpent)}h logged</p>
              <p className="estimate-time text-right">
                {Number(timeTrackingRemaining)}h estimated
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <input
              type="number"
              min="0"
              defaultValue="0"
              className="form-control"
              name="timeTrackingSpent"
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <input
              type="number"
              min="0"
              defaultValue="0"
              className="form-control"
              name="timeTrackingRemaining"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>
        {/* Search Modal */}
        <div
          className="modal fade"
          id="searchModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="searchModal"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-search">
            <div className="modal-content">
              <div className="modal-header">
                <div className="search-block">
                  <input className="search" />
                  <i className="fa fa-search" />
                </div>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>RECENT ISSUES</p>
                <div style={{ display: "flex" }}>
                  <div className="icon">
                    <i className="fa fa-bookmark" />
                  </div>
                  <div>
                    <p>cyberlearn</p>
                    <p>BUG-238066</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Info Modal */}
        <div
          className="modal fade"
          id="infoModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="infoModal"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-info">
            <div className="modal-content">
              <div className="modal-header">
                <div className="task-title">
                  <div className="row">
                    <div className="col-6">
                      <select
                        name="typeId"
                        className="form-control"
                        value={taskDetailModal.typeId}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      >
                        {arrTaskType?.map((item, index) => {
                          return (
                            <option key={index} value={item.id}>
                              {item.taskType}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="col-6">
                      <span className="text-2xl ">
                        {taskDetailModal.taskName}
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex" }} className="task-click">
                  <div>
                    <i className="fab fa-telegram-plane" />
                    <span style={{ paddingRight: 20 }}>Give feedback</span>
                  </div>
                  <div>
                    <i className="fa fa-link" />
                    <span style={{ paddingRight: 20 }}>Copy link</span>
                  </div>
                  <i
                    className="fa fa-trash-alt"
                    style={{ cursor: "pointer" }}
                  />
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
              </div>
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-8">
                      <p className="issue">This is an issue of type: Task.</p>
                      <div className="description">
                        <p>Description</p>
                        <p>{renderDescription()}</p>
                      </div>
                      <div style={{ fontWeight: 500, marginBottom: 10 }}>
                        Jira Software (software projects) issue types:
                      </div>
                      <div className="title">
                        <div className="title-item">
                          <h3>
                            BUG <i className="fa fa-bug" />
                          </h3>
                          <p>
                            A bug is a problem which impairs or prevents the
                            function of a product.
                          </p>
                        </div>
                        <div className="title-item">
                          <h3>
                            STORY <i className="fa fa-book-reader" />
                          </h3>
                          <p>
                            A user story is the smallest unit of work that needs
                            to be done.
                          </p>
                        </div>
                        <div className="title-item">
                          <h3>
                            TASK <i className="fa fa-tasks" />
                          </h3>
                          <p>A task represents work that needs to be done</p>
                        </div>
                      </div>
                      <div className="comment">
                        <h6>Comment</h6>
                        <div
                          className="block-comment"
                          style={{ display: "flex" }}
                        >
                          <div className="avatar">
                            <img
                              src={require("../assets/img/download (1).jfif")}
                              alt
                            />
                          </div>
                          <div className="input-comment">
                            <input
                              type="text"
                              placeholder="Add a comment ..."
                            />
                            <p>
                              <span style={{ fontWeight: 500, color: "gray" }}>
                                Protip:
                              </span>
                              <span>
                                press
                                <span
                                  style={{
                                    fontWeight: "bold",
                                    background: "#ecedf0",
                                    color: "#b4bac6",
                                  }}
                                >
                                  M
                                </span>
                                to comment
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="lastest-comment">
                          <div className="comment-item">
                            <div
                              className="display-comment"
                              style={{ display: "flex" }}
                            >
                              <div className="avatar">
                                <img
                                  src={require("../assets/img/download (2).jfif")}
                                  alt
                                />
                              </div>
                              <div>
                                <p style={{ marginBottom: 5 }}>
                                  Lord Gaben <span>a month ago</span>
                                </p>
                                <p style={{ marginBottom: 5 }}>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Repellendus tempora ex
                                  voluptatum saepe ab officiis alias totam ad
                                  accusamus molestiae?
                                </p>
                                <div>
                                  <span style={{ color: "#929398" }}>Edit</span>
                                  •
                                  <span style={{ color: "#929398" }}>
                                    Delete
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="status">
                        <h6>STATUS</h6>
                        <select
                          className="custom-select form-control"
                          value={taskDetailModal.statusId}
                          onChange={handleChange}
                          name="statusId"
                          onClick={() => {
                            dispatch({
                              type: "POST_UPDATE_TASK",
                              newTask: taskDetailModal,
                            });
                          }}
                        >
                          {arrStatus?.map((status, index) => {
                            return (
                              <option key={index} value={status.statusId}>
                                {status.statusName}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="assignees">
                        <div className="row">
                          <div className="col-4">
                            <h6>ASSIGNEES</h6>
                          </div>
                          <div className="col-8">
                            <select
                              className="form-control"
                              name="members"
                              defaultValue="+add member"
                              width="50px"
                              height="10px"
                            >
                              {projectDetail.members
                                ?.filter((mem) => {
                                  let index =
                                    taskDetailModal.assigness?.findIndex(
                                      (us) => us.id === mem.userId
                                    );
                                  if (index !== -1) {
                                    return false;
                                  }
                                  return true;
                                })
                                .map((mem, index) => {
                                  return (
                                    <option value={mem.userId}>
                                      {mem.name}
                                    </option>
                                  );
                                })}
                            </select>
                          </div>
                        </div>
                        <div style={{ display: "flex" }} className="container">
                          {taskDetailModal.assigness.map((user, index) => {
                            return (
                              <div
                                key={index}
                                style={{ display: "flex", flexWrap: "wrap" }}
                                className="item"
                              >
                                <div className="avatar">
                                  <img src={user.avatar} alt={user.avatar} />
                                </div>
                                <p className="name mt-1">
                                  {user.name}
                                  <i
                                    className="fa fa-times"
                                    style={{ marginLeft: 5 }}
                                  />
                                </p>
                              </div>
                            );
                          })}

                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <i
                              className="fa fa-plus"
                              style={{ marginRight: 5 }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="priority" style={{ marginBottom: 20 }}>
                        <h6>PRIORITY</h6>
                        <select
                          name="priorityId"
                          className="form-control"
                          value={taskDetailModal.priorityId}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                        >
                          {arrPriority.map((item, index) => {
                            return (
                              <option value={item.priorityId} key={index}>
                                {item.priority}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="estimate">
                        <h6>ORIGINAL ESTIMATE (HOURS)</h6>
                        <input
                          name="originalEstimate"
                          type="text"
                          className="estimate-hours"
                          value={taskDetailModal.originalEstimate}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                        />
                      </div>
                      <div className="time-tracking">
                        <h6>TIME TRACKING</h6>
                        {renderTimeTracking()}
                      </div>
                      <div style={{ color: "#929398" }}>
                        Create at a month ago
                      </div>
                      <div style={{ color: "#929398" }}>
                        Update at a few seconds ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalTask;
