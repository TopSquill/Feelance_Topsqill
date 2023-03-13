import React, { useState } from "react";
import { axiosClient } from "../../utills/axiosClient";
import { KEY_ACCESS_TOKEN, setItem } from "../../utills/localStorageManeger";
import ErrorMsg from "../ErrorMsg";
import SuccessMsg from "../SuccessMsg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isError, setIsError] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = await axiosClient.post(
        "http://localhost:8000/users/login",
        {
          email,
          password,
        }
      );
      console.log(result);
      //setItem(KEY_ACCESS_TOKEN, result.accessToken);
      setSuccessMessage(result.response.data.message);
      setIsCorrect(true);
    } catch (error) {
      setIsError(true);

      console.log(error.response.data.message);
      setErrorMessage(error.response.data.message);
    }
  };

  const resendMail = async (e) => {
    e.preventDefault();

    try {
      const result = await axiosClient.post(
        "http://localhost:8000/users/verify-email/resend/",
        {
          email,
        }
      );
      console.log(result.data.message);
      //setItem(KEY_ACCESS_TOKEN, result.accessToken);
      setSuccessMessage(result.data.message);
      setIsCorrect(true);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      setIsCorrect(false);
      console.log(error);
      // console.log(error.response.data.message);
      // setErrorMessage(error.response.data.message);
    }
  };
  return (
    <>
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              {isError ? <ErrorMsg msg={errorMessage} /> : ""}
              {isCorrect ? <SuccessMsg msg={successMessage} /> : ""}
              {errorMessage === "Email not verified" ? (
                <form>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-email"
                      placeholder="Resend Verification Mail"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </form>
              ) : (
                <form>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="recipient-password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </form>
              )}
            </div>
            <div className="modal-footer">
              {errorMessage === "Email not verified" ? (
                <div>
                  <input
                    type="submit"
                    className="btn btn-primary"
                    // data-bs-target="#exampleModalToggle"
                    // data-bs-toggle="modal"
                    // data-bs-dismiss="modal"
                    value="Send"
                    onClick={resendMail}
                  />
                </div>
              ) : (
                <>
                  <div className="text-center float-start">
                    <span className="small-text mr-2">Want to Join us</span>
                    <button
                      className="btn btn-success"
                      data-bs-target="#exampleModalToggle2"
                      data-bs-toggle="modal"
                      data-bs-dismiss="modal"
                    >
                      Sign Up
                    </button>
                  </div>
                  <div>
                    <input
                      type="submit"
                      className="btn btn-primary"
                      // data-bs-target="#exampleModalToggle"
                      // data-bs-toggle="modal"
                      // data-bs-dismiss="modal"
                      value="LogIn"
                      onClick={handleSubmit}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
