import React from "react";

const ErrorMsg = ({ msg }) => {
  return (
    <>
      <div className="container">
        <div className="alert alert-danger" role="alert">
          {msg}
        </div>
      </div>
    </>
  );
};

export default ErrorMsg;
