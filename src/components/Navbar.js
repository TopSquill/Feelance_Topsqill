import React from "react";
import Accounts from "../modal/Accounts";
import UserProfile from "../modal/UserProfile";
import UserSection from "./UserSection";
import { getItem, KEY_ACCESS_TOKEN } from "../utills/localStorageManeger";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = getItem(KEY_ACCESS_TOKEN);

  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top fw-bold pr-20">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Topsqil
          </Link>
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
              <li className="nav-item ms-3">
                <Link className="nav-link text-light" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link className="nav-link text-light " to="/freelancer">
                  Freelancer
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link className="nav-link text-light" to="/vendor">
                  Vendor
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link className="nav-link text-light" to="/client">
                  Client
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link className="nav-link text-light" to="/find-work">
                  Find Work
                </Link>
              </li>
              <li className="nav-item ms-3" onClick={() => navigate("/about")}>
                <span className="nav-link text-light">About</span>
              </li>
              <li
                className="nav-item ms-3"
                onClick={() => navigate("/contact")}
              >
                <span className="nav-link text-light">Contact</span>
              </li>

              {user ? (
                <li className="nav-item ms-3">
                  <UserSection />
                </li>
              ) : (
                <li className="nav-item ms-3">
                  <Accounts />
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
