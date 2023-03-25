import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ProjctCards from "../components/ProjctCards";
import "./profile.css";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="h-100 gradient-custom-2">
        <div className="container-fluid py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-10">
              <div className="card">
                <div
                  className="rounded-top text-white d-flex flex-row"
                  style={{ backgroundColor: "#000", height: 200 }}
                >
                  <div
                    className="ms-4 mt-5 d-flex flex-column"
                    style={{ width: 150 }}
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                      alt="Generic placeholder image"
                      className="img-fluid img-thumbnail mt-4 mb-2"
                      style={{ width: 150, zIndex: 1 }}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-dark"
                      data-mdb-ripple-color="dark"
                      style={{ zIndex: 1 }}
                      onClick={() => navigate("/update-profile")}
                    >
                      Edit profile
                    </button>
                  </div>
                  <div className="ms-3" style={{ marginTop: 130 }}>
                    <h5>Andy Horwitz</h5>
                    <p>New York</p>
                  </div>
                </div>
                <div
                  className="px-4 text-black"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  =
                  <div className="row social">
                    <div className="d-flex col-sm-6 col-6 justify-content-center text-center pb-2">
                      <div>
                        <p className="mb-1  title h5">
                          <i class="icon bi bi-linkedin"></i>
                        </p>
                        <p className="small small-text text-muted mb-0">
                          LinkedIn
                        </p>
                      </div>
                      <div className="px-3">
                        <p className="mb-1  title h5">
                          <i class="icon bi bi-github"></i>
                        </p>
                        <p className="small small-text text-muted mb-0">
                          GitHub
                        </p>
                      </div>
                      <div>
                        <p className="mb-1  title h5">
                          <i class="icon bi bi-facebook"></i>
                        </p>
                        <p className="small small-text text-muted mb-0">
                          FaceBook
                        </p>
                      </div>
                    </div>
                    <div className="d-flex col-sm-6 col-6 justify-content-end text-center pb-2">
                      <div>
                        <p className="mb-1 title h5">25</p>
                        <p className="small small-text text-muted mb-0">
                          Projects
                        </p>
                      </div>
                      <div className="px-3">
                        <p className="title mb-1 h5">4.5</p>
                        <p className="small small-text text-muted mb-0">
                          Rating
                        </p>
                      </div>
                      <div>
                        <p className="title mb-1 h5">5</p>
                        <p className="small small-text text-muted mb-0">Jobs</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body p-4 text-black">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-3" style={{ backgroundColor: "#f8f9fa" }}>
                    <div className="row mb-5">
                      <div className="col-md-6">
                        <p className="font-italic mb-1">Web Developer</p>
                        <p className="font-italic mb-1">Lives in New York</p>
                        <p className="font-italic mb-0">Photographer</p>
                      </div>
                      <div className="col-md-6">
                        <p className="font-italic mb-1">Skills</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <p className="lead fw-normal mb-0">Projects</p>
                    <p className="mb-0">
                      <a href="#!" className="text-muted">
                        Show all
                      </a>
                    </p>
                  </div>
                  {/* <div className="row g-2">
                    <div className="col-md-3 col-sm-6 mb-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                    <div className="col-md-3 col-sm-6 mb-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                    <div className="col-md-3 col-sm-6 mb-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                    <div className="col-md-3 col-sm-6 mb-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                  </div>
                  <div className="row g-2">
                    <div className="col-md-3 col-sm-6 mb-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                    <div className="col-md-3 col-sm-6 mb-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                    <div className="col-md-3 col-sm-6 mb-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                    <div className="col-md-3 col-sm-6 mb-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                  </div> */}
                  <ProjctCards />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
