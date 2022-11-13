import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../redux/reducer/authSlices";
import logo from '../../nobabjada-2.png';
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux/hooks/useTypeSelector";
import { RegisterFormField } from "../../redux/models/RegisterFormField.interface";
import { clearMessage } from "../../redux/reducer/messages";

const Register = () => {
  const [successful, setSuccessful] = useState(false);
  const { message } = useAppSelector((state) => state.message);
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(clearMessage());
    setSuccessful(false);
  }, [dispatch]);

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleRegister = (formValue: RegisterFormField) => {
    const { name, email, password } = formValue;
    setSuccessful(false);

    dispatch(register({ name, email, password }))
      .unwrap()
      .then(() => {
        setSuccessful(true);
        setTimeout(() => {
          navigate('/login')
        }, 5000);
      })
      .catch(() => {
        setSuccessful(false);
      });
  };

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100 p-l-110 p-r-110 p-t-30 p-b-33">
          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <span className="login100-form-title p-b-53 mb-2">
            <Link to="/"><img src={logo} alt="logo" className="img-fluid"/></Link>
            Create your account
          </span>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleRegister}
          >
          
              <Form className="login100-form validate-form flex-sb flex-w">
                <React.Fragment>
                  <div className="p-t-31 p-b-9">
                    <span className="txt1">Name</span>
                  </div>
                  <div className="wrap-input100 validate-input">
                    <Field className="input100" type="text" name="name" />
                    <span className="focus-input100"></span>
                  </div>
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="alert wrap-msg"
                  />
                  {/* Email field */}
                  <div className="p-t-31 p-b-9">
                    <span className="txt1">Email</span>
                  </div>
                  <div className="wrap-input100 validate-input">
                    <Field className="input100" type="email" name="email" />
                    <span className="focus-input100"></span>
                  </div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="alert wrap-msg"
                  />
                  {/* Password field */}
                  <div className="p-t-13 p-b-9">
                    <span className="txt1">Password</span>
                  </div>
                  <div className="wrap-input100 validate-input">
                    <Field
                      className="input100"
                      type="password"
                      name="password"
                    />
                    <span className="focus-input100"></span>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="alert wrap-msg"
                  />
                  {/* Confirm password field */}
                  <div className="p-t-13 p-b-9">
                    <span className="txt1">Confirm Password</span>
                  </div>
                  <div className="wrap-input100 validate-input">
                    <Field
                      className="input100"
                      type="password"
                      name="confirmPassword"
                    />
                    <span className="focus-input100"></span>
                  </div>
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="alert wrap-msg"
                  />

                  <div className="container-login100-form-btn m-t-17">
                    <button type="submit" className="login100-form-btn">
                      Sign Up
                    </button>
                  </div>
                </React.Fragment>

                <div className="w-full text-center p-t-55 toggle-form">
                  <span className="txt2">Already have an account?</span>
                  &nbsp;
                  <Link to="/login" className="txt2 bo1">
                    Login
                  </Link>
                </div>
              </Form>
         
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
