import React, { useState } from "react";
import { axiosClient } from "../../utills/axiosClient";
import { KEY_ACCESS_TOKEN, setItem } from "../../utills/localStorageManeger";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axiosClient.post(
        "http://localhost:8000/users/login",
        {
          email,
          password,
        }
      );
      console.log(result);
      //setItem(KEY_ACCESS_TOKEN, result.accessToken);
    } catch (error) {
      console.log(error);
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
                    type="text"
                    className="form-control"
                    id="recipient-password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
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
                  data-bs-target="#exampleModalToggle"
                  // data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                  value="LogIn"
                  onClick={handleSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
