import React, { useState } from "react";
import { axiosClient } from "../../utills/axiosClient";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axiosClient.post(
        "http://localhost:8000/users/signup",
        {
          name,
          email,
          password,
          userType,
        }
      );

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel2">
                Sign Up
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
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Email
                  </label>
                  <input
                    type="email"
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
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    UserType
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-usertype"
                    onChange={(e) => setUserType(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <div className="text-center float-start">
                <span className="small-text mr-2">Already a Member</span>
                <button
                  className="btn btn-success"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                >
                  LogIn
                </button>
              </div>
              <div>
                <input
                  type="submit"
                  className="btn btn-primary"
                  //   data-bs-target="#exampleModalToggle"
                  // data-bs-toggle="modal"
                  // data-bs-dismiss="modal"
                  onClick={handleSubmit}
                  value="Sign Up"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
