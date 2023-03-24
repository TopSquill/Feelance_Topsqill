import React from "react";

const ResendMail = () => {
  return (
    <>
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
    </>
  );
};

export default ResendMail;
