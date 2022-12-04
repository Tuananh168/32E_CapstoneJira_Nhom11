import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {
  ADD_HISTORY,
  USER_SIGNUP_SAGA,
} from "../../redux/constants/CyberBugs/CyberBugs";
import { useNavigate } from "react-router-dom";
const SignUp = (props) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    dispatch({ type: ADD_HISTORY, history: navigate });
  }, []);
  const formik = useFormik({
    initialValues: {
      email: "",
      passWord: "",
      name: "",
      phoneNumber: "",
    },
    onSubmit: (values, props) => {
      console.log("values", values);
      dispatch({
        type: USER_SIGNUP_SAGA,
        infoUser: values,
      });
    },
    handleChange: (values) => {
      console.log("values", values);
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required!"),
      passWord: Yup.string()
        .max(15, "Must be 15 characters or less")
        .min(8, "Must be 8 characters or than")
        .required("required!"),
    }),
  });
  const { handleSubmit, handleChange, values, errors } = formik;
  return (
    <form
      className="h-full gradient-form bg-gray-200 md:h-screen"
      onSubmit={handleSubmit}
    >
      <div className="container py-12 px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="lg:w-6/12 px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
                        alt="logo"
                      />
                    </div>
                    <div>
                      <p className="mb-4">Please fill your information</p>
                      <div className="mb-4">
                        <input
                          type="text"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Email"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          name="passWord"
                          value={values.passWord}
                          onChange={handleChange}
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Password"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Name"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="number"
                          name="phoneNumber"
                          value={values.phoneNumber}
                          onChange={handleChange}
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Number Phone"
                        />
                      </div>
                      <div className="text-center pt-1 mb-12 pb-1">
                        <button
                          type="submit"
                          className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          style={{
                            background:
                              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                          }}
                        >
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                    <h4 className="text-xl font-semibold mb-6">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
