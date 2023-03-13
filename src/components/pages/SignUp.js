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
      <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            name="name"
            aria-describedby="emailHelp"
            placeholder="Enter Your Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter Your Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword"
            name="password"
            placeholder="Enter Your Passsword"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            UserType
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputUserType"
            name="usertype"
            aria-describedby="emailHelp"
            placeholder="Enter Your UserType"
            onChange={(e) => {
              setUserType(e.target.value);
            }}
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary"
          value="Submit"
          onClick={handleSubmit}
        />
      </div>
    </>
  );
};

export default SignUp;
