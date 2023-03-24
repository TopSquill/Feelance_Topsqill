import React from "react";
import { getItem, KEY_ACCESS_TOKEN } from "../utills/localStorageManeger";
import Login from "./Login";
import SignUp from "./SignUp";
const Accounts = () => {
  const user = getItem(KEY_ACCESS_TOKEN);

  return (
    <>
      <div>
        <Login />
        <SignUp />

        <button
          className="btn btn-primary"
          data-bs-toggle="modal"
          href="#exampleModalToggle"
          role="button"
        >
          LogIn
          <i className="bi bi-box-arrow-in-right ml-2"></i>
        </button>
      </div>
    </>
  );
};

export default Accounts;
