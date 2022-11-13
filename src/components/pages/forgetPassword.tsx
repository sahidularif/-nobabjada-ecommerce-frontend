import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./login.css";
import { Link } from "react-router-dom";
import logo from "../../nobabjada-2.png";

import { LoginUser } from "../../redux/models/LoginUser.interface";

const ForgetPassword = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const handleRegister = (formValue: LoginUser) => {
    alert(JSON.stringify(formValue));
  };

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100 p-l-110 p-r-110 p-t-30 p-b-33">
          <span className="login100-form-title p-b-53 mb-5">
          <Link to="/"><img src={logo} alt="logo" className="img-fluid"/></Link>
            Welcome back
          </span>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleRegister}
          >
            <Form className="login100-form validate-form flex-sb flex-w">
              <React.Fragment>
                <p>
                  Please enter the email address for your account. A
                  verification code will be sent to you. Once you have received
                  the verification code, you will be able to choose a new
                  password for your account.
                </p>
                <div className="wrap-input100 validate-input mt-3">
                  <Field
                    className="input100"
                    type="email"
                    name="email"
                    placeholder="Account email address"
                  />
                  <span className="focus-input100"></span>
                </div>

                <ErrorMessage
                  name="email"
                  component="div"
                  className="alert wrap-msg"
                />

                <div className="container-login100-form-btn mt-5 justify-content-center">
                  <button type="submit" className="login100-form-btn">
                    REQUEST PASSWORD RESET
                  </button>
                </div>
              </React.Fragment>

              <div className="w-full text-center mt-4 toggle-form">
                &nbsp;
                <Link to="/login" className="txt2 bo1">
                  Back to login
                </Link>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
