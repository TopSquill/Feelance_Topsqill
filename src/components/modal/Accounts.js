import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const Accounts = () => {
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
          <i class="bi bi-box-arrow-in-right ml-2"></i>
        </button>
      </div>
    </>
  );
};

export default Accounts;
