import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import logo from "../../nobabjada-2.png";
import { google, loggin } from "../../redux/reducer/authSlices";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux/hooks/useTypeSelector";
import { LoginUser } from "../../redux/models/LoginUser.interface";
import { clearMessage } from "../../redux/reducer/messages";

const Login = () => {
  const [successful, setSuccessful] = useState(false);
  const { message } = useAppSelector((state) => state.message);
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation()
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  useEffect(() => {
    if (user) navigate('/dashboard')

  }, []);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    password: Yup.string().required("Password is required"),
  });

  const handleLogin = (formValue: LoginUser) => {
    setSuccessful(false);

    dispatch(loggin(formValue))
      .unwrap()
      .then(() => {
        setSuccessful(true);
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 1000);
      })
      .catch((err) => {
        console.log(err)
        setSuccessful(false);
        <Navigate to="/login" state={{ from: location }} replace />;
      });
  };

  const handleGoogleLogin = async () => {
    dispatch(google(null))
      .unwrap()
      .then(() => {
        setSuccessful(true);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch(() => {
        setSuccessful(false);
      });
  };
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100 p-l-110 p-r-110 p-t-30 p-b-33">
          <span className="login100-form-title p-b-53 mb-5 justify-content-center text-center">
            <Link to="/"><img src={logo} alt="logo" className="img-fluid" /></Link>
            Welcome back
          </span>
          <div className="w-full d-flex justify-content-between">
            <button className="btn-google m-b-20" onClick={handleGoogleLogin}>
              <FcGoogle size={35} />
              &nbsp;&nbsp; Google
            </button>

            <button className="btn-face m-b-20">
              <BsFacebook size={35} /> &nbsp;&nbsp;&nbsp; Facebook
            </button>
          </div>
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
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            <Form className="login100-form validate-form flex-sb flex-w">
              <React.Fragment>
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
                  className="alert text-danger wrap-msg"
                />
                {/* Password field */}
                <div className="p-t-13 p-b-9">
                  <span className="txt1">Password</span>
                </div>
                <div className="wrap-input100 validate-input">
                  <Field className="input100" type="password" name="password" />
                  <span className="focus-input100"></span>
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="alert wrap-msg"
                />

                <div className="container-login100-form-btn m-t-17">
                  <button type="submit" className="login100-form-btn">
                    Sign In
                  </button>
                </div>
              </React.Fragment>

              <div className="w-full text-center p-t-55 toggle-form">
                <span className="txt2">Not a member?</span>
                &nbsp;
                <Link to="/register" className="txt2 bo1">
                  Create New Account
                </Link>
              </div>
              <div className="w-full text-center mt-2 toggle-form">
                &nbsp;
                <Link to="/forgetPassword" className="txt2 bo1">
                  Forgot Your Password?
                </Link>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
