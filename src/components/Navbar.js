import React from "react";
import Accounts from "./modal/Accounts";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark fixed-top fw-bold">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Topsqil
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item ms-3">
                <a className="nav-link text-light " href="#">
                  Freelancer
                </a>
              </li>
              <li className="nav-item ms-3">
                <a className="nav-link text-light" href="#">
                  Vendor
                </a>
              </li>
              <li className="nav-item ms-3">
                <a className="nav-link text-light" href="#">
                  Client
                </a>
              </li>
              <li className="nav-item ms-3">
                <a className="nav-link text-light" href="#">
                  Find Work
                </a>
              </li>
              <li className="nav-item ms-3">
                <a className="nav-link text-light" href="#">
                  About
                </a>
              </li>
              <li className="nav-item ms-3">
                <a className="nav-link text-light" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item ms-3">
                <Accounts />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
