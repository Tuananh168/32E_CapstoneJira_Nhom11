import React, { useEffect, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PROJECT_CATEGORY_SAGA } from "../../redux/constants/CyberBugs/CyberBugs";

const CreateProject = () => {
  const editorRef = useRef(null);
  const dispatch = useDispatch();
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  // Lấy create category...
  useEffect(() => {
    dispatch({ type: PROJECT_CATEGORY_SAGA });
  }, []);

  const listProjectCategory = useSelector(
    (state) => state.ProjectCategoryReducer.listProjectCategory
  );
  console.log("listProjectCategory: ", listProjectCategory);

  const formik = useFormik({
    initialValues: {
      projectName: "",
      description: "",
      categoryId: 1,
    },

    onSubmit: (values, props) => {
      console.log("values: ", values);
      dispatch({
        type: "GET_CREATE_PROJECT_SAGA",
        newProject: values,
      });
    },
  });

  const { handleSubmit, handleChange, values, setFieldValue } = formik;

  const handleEditorChange = (content, editer) => {
    setFieldValue("description", content);
    console.log("content", content);
  };

  return (
    <div className="from-control">
      <h3 className="text-center">Create Project</h3>
      <form className="container-fluid" onSubmit={handleSubmit}>
        <div className="form-group">
          <p>Name</p>
          <input
            className="form-control"
            name="projectName"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <p>Description</p>
          <Editor
            name="description"
            onEditorChange={handleEditorChange}
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
        <div className="form-group">
          <select
            name="categoryId"
            className="form-control"
            value={listProjectCategory.id}
            onChange={(e) => {
              handleChange(e);
            }}
          >
            {listProjectCategory?.map((item, index) => {
              return (
                <option key={index} value={item.id}>
                  {item.projectCategoryName}
                </option>
              );
            })}
          </select>
        </div>
        <button
          className="bg-blue-600 p-2 mt-3 rounded-full text-white"
          type="submit"
        >
          Save Change
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
