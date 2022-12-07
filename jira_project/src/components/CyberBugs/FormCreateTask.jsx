import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Select, Slider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { GET_ADD_USER_SAGA } from "../../redux/constants/CyberBugs/CyberBugs";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormCreateTask = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const [timeTracking, setTimeTracking] = useState({
    timeTrackingSpent: 0,
    timeTrackingRemaining: 0,
  });

  // Gọi API Get All Project
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "GET_ALL_PROJECT_SAGA",
    });
    dispatch({
      type: "TASK_TYPE_SAGA",
    });
    dispatch({
      type: "GET_PRIORITY_SAGA",
    });
    dispatch({
      type: GET_ADD_USER_SAGA,
      keyword: "1",
    });
    dispatch({
      type: "GET_STATUS_SAGA",
    });
    dispatch({ type: "SET_SUBMIT_CREATE_TASK", submitFunction: handleSubmit });
  }, []);

  const { arrTaskType } = useSelector((state) => state.TaskTypeReducer);

  const { arrProject } = useSelector((state) => state.ProjectCyberBugsReducer);

  const { arrPriority } = useSelector((state) => state.PriorityReducer);

  const { UserSearch } = useSelector((state) => state.UserCyberBugsReducer);

  const { arrStatus } = useSelector((state) => state.StatusReducer);
  console.log("arrStatus: ", arrStatus);

  const searchOptions = UserSearch.map((user, index) => {
    return { value: user.userId, label: user.name };
  });

  const formik = useFormik({
    initialValues: {
      taskName: "",
      description: "",
      statusId: 1,
      originalEstimate: 0,
      timeTrackingSpent: 0,
      timeTrackingRemaining: 0,
      projectId: 1,
      typeId: 1,
      priorityId: 1,
      listUserAsign: [],
    },

    onSubmit: (values, props) => {
      console.log("values", values);
      dispatch({
        type: "POST_TASK_PROJECT_SAGA",
        newTask: values,
      });
    },
    handleSubmit: (values) => {},
  });

  const {
    handleSubmit,
    handleChange,
    setFieldValue,
    values,
    errors,
    initialValues,
  } = formik;

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="form-group">
        <p>Project :</p>
        <select
          name="projectId"
          className="form-control"
          onChange={handleChange}
        >
          {arrProject?.map((item, index) => {
            return (
              <option key={index} value={item.id}>
                {item.projectName.length > 70 ? (
                  <span>{item.projectName.slice(0, 70)}...</span>
                ) : (
                  <span>{item.projectName}</span>
                )}
              </option>
            );
          })}
        </select>
      </div>
      <div className="form-group">
        <p>Task name</p>
        <input
          name="taskName"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <p>Status</p>
        <select
          name="statusId"
          className="form-control"
          onChange={handleChange}
        >
          {arrStatus?.map((status, index) => {
            return (
              <option value={status.statusId} key={index}>
                {status.statusName}
              </option>
            );
          })}
        </select>
      </div>
      <div className="form-group">
        <div className="row">
          <div className="col-6">
            <p>Priority</p>
            <select
              name="priorityId"
              className="form-control"
              onChange={handleChange}
            >
              {arrPriority?.map((item, index) => {
                return (
                  <option value={item.priorityId} key={index}>
                    {item.priority}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-6">
            <p>Task type :</p>
            <select
              className="form-control"
              name="typeId"
              onChange={handleChange}
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
        </div>
      </div>
      <div className="form-group">
        <div className="row">
          <div className="col-6">
            <p>Assigness :</p>
            <Select
              mode="multiple"
              style={{
                width: "100%",
              }}
              placeholder="Please add user"
              onChange={(values) => {
                setFieldValue("listUserAsign", values);
              }}
              options={searchOptions}
              optionFilterProp="label"
            />
            <div className="row">
              <div className="col-12 mt-4">
                <p>Original Estimate :</p>
                <input
                  type="number"
                  min="0"
                  name="originalEstimate"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <p>Time Tracking :</p>
            <Slider
              defaultValue={30}
              value={timeTracking.timeTrackingSpent}
              max={
                Number(timeTracking.timeTrackingSpent) +
                Number(timeTracking.timeTrackingRemaining)
              }
            />
            <div className="row">
              <div className="col-6 text-left font-bold">
                {timeTracking.timeTrackingSpent}h logged
              </div>
              <div className="col-6 text-right font-bold">
                {timeTracking.timeTrackingRemaining}h remaining
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <p>Time spent :</p>
                <input
                  type="number"
                  defaultValue="0"
                  min="0"
                  className="form-control"
                  name="timeTrackingSpent"
                  onChange={(e) => {
                    setTimeTracking({
                      ...timeTracking,
                      timeTrackingSpent: e.target.value,
                    });
                    setFieldValue("timeTrackingSpent", e.target.value);
                  }}
                />
              </div>
              <div className="col-6">
                <p>Time remaining :</p>
                <input
                  type="number"
                  defaultValue="0"
                  min="0"
                  className="form-control"
                  name="timeTrackingRemaining"
                  onChange={(e) => {
                    setTimeTracking({
                      ...timeTracking,
                      timeTrackingRemaining: e.target.value,
                    });
                    setFieldValue("timeTrackingRemaining", e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group">
        <p>Description :</p>
        <Editor
          onEditorChange={(content, editer) => {
            setFieldValue("description", content);
            console.log("content", content);
          }}
          onInit={(evt, editor) => (editorRef.current = editor)}
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
      </div>
    </form>
  );
};

export default FormCreateTask;
