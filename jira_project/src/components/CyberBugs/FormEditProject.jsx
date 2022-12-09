import React, { Fragment, useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { PROJECT_CATEGORY_SAGA } from "../../redux/constants/CyberBugs/CyberBugs";
import { SET_SUBMIT_EDIT_PROJECT } from "../../redux/constants/CyberBugs/DrawerCyberBugs";
import { GET_UPDATE_PROJECT_SAGA } from "../../redux/constants/CyberBugs/ProjectConstant";

const FormEditProject = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: PROJECT_CATEGORY_SAGA });
    dispatch({
      type: GET_UPDATE_PROJECT_SAGA,
      projectUpdate: values,
    });
    dispatch({
      type: SET_SUBMIT_EDIT_PROJECT,
      submitFunction: handleSubmit,
    });
  }, []);
  // Dùng useSelector lấy dữ liệu từ reducer về
  const projectEdit = useSelector((state) => state.ProjectReducer.projectEdit);

  const listProjectCategory = useSelector(
    (state) => state.ProjectCategoryReducer.listProjectCategory
  );

  // Sử dụng formik để đưa dữ liệu lên .
  const formik = useFormik({
    initialValues: {
      id: projectEdit?.id,
      projectName: projectEdit?.projectName,
      description: projectEdit.description,
      categoryId: projectEdit.categoryId,
    },

    onSubmit: (values, props) => {
      dispatch({
        type: GET_UPDATE_PROJECT_SAGA,
        projectUpdate: { ...values, creator: projectEdit.creator.id },
      });
    },
    handleSubmit: (values) => {},
  });
  const editorRef = useRef(null);

  const { handleSubmit, handleChange, values, errors, initialValues } = formik;

  return (
    <form className="container-fluid" onSubmit={handleSubmit}>
      <h1 style={{ fontSize: 30 }}>Edit Project</h1>
      <div className="row" style={{ marginTop: "4%" }}>
        <div className="col-4">
          <div className="form-group">
            <p className="font-weight-bold">Project id</p>
            <input
              disabled
              className="form-control"
              name="id"
              onChange={(e) => handleChange(e)}
              value={values?.id}
            />
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <p className="font-weight-bold">Project name</p>
            <input
              className="form-control"
              name="projectName"
              onChange={(e) => handleChange(e)}
              value={values.projectName}
            />
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <p className="font-weight-bold">Project Category</p>
            <select
              name="categoryId"
              className="form-control"
              value={values.categoryId}
              onChange={(e) => handleChange(e)}
            >
              {listProjectCategory.map((item, index) => {
                return (
                  <option key={index} value={item.id}>
                    {item.projectCategoryName}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "2%" }}>
        <p className="font-weight-bold">Description</p>
        <Editor
          name="description"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue={values.description}
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

export default FormEditProject;
