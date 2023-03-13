import React from "react";

const SuccessMsg = ({ msg }) => {
  return (
    <>
      <div className="container">
        <div class="alert alert-success" role="alert">
          {msg}
        </div>
      </div>
    </>
  );
};

export default SuccessMsg;
