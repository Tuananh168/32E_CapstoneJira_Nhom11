import React, { Fragment, useEffect, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { PROJECT_CATEGORY_SAGA } from "../../redux/constants/CyberBugs/CyberBugs";
import { SET_SUBMIT_EDIT_PROJECT } from "../../redux/constants/CyberBugs/DrawerCyberBugs";

const FormEditProject = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: PROJECT_CATEGORY_SAGA });
    dispatch({
      type: "GET_UPDATE_PROJECT_SAGA",
      projectUpdate: values,
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
      projectName: projectEdit.projectName,
      description: projectEdit.description,
      categoryId: listProjectCategory.id,
    },

    onSubmit: (values, props) => {},
    handleSubmit: (values) => {},
  });
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
    console.log("123");
    dispatch({
      type: SET_SUBMIT_EDIT_PROJECT,
      submitFunction: handleSubmit,
    });
  };
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
              onChange={handleChange}
              value={values.id}
            />
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <p className="font-weight-bold">Project name</p>
            <input
              className="form-control"
              name="projectName"
              onChange={handleChange}
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
        <button type="submit" onClick={log}>
          Log editor content
        </button>
      </div>
    </form>
  );
};

export default FormEditProject;
