import React from "react";
import { Link } from "react-router-dom";
import { KEY_ACCESS_TOKEN, removeItem } from "../utills/localStorageManeger";

const UserSection = () => {
  const logOut = () => {
    const confirmed = window.confirm("Are you sure want to Logout?");

    if (confirmed) {
      removeItem(KEY_ACCESS_TOKEN);
      window.location.replace("/", "_self");
    }
  };
  return (
    <>
      <div className="container dropdown-center">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul
            className="navbar-nav dropdown-center"
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "white",
            }}
          >
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person-circle"></i>
              </span>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <span className="dropdown-item" onClick={logOut}>
                    Logout
                    <i className="bi bi-box-arrow-right "></i>
                  </span>
                </li>
                <li>
                  <span className="dropdown-item">
                    <Link
                      to="/update-profile"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <span className="h6 title">Update Profile</span>
                    </Link>
                  </span>
                </li>
                <li>
                  <span className="dropdown-item">
                    <Link
                      to="/profile"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <span className="h6 title">Profile</span>
                    </Link>
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserSection;
