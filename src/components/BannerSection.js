import React from "react";

const BannerSection = () => {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div
            className="carousel-item active "
            data-bs-interval={10000}
            style={{ maxHeight: "75vh" }}
          >
            <img
              src="https://t3.ftcdn.net/jpg/04/10/34/54/240_F_410345403_tV5hpFLJ7VCSgsAYJRC74tG4DA9LTXyC.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div
            className="carousel-item"
            data-bs-interval={2000}
            style={{ maxHeight: "75vh" }}
          >
            <img
              src="https://t4.ftcdn.net/jpg/04/92/06/53/240_F_492065380_eSlHdkdNBy6ArNkk5gV0Lme1qhvTosSI.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item" style={{ maxHeight: "75vh" }}>
            <img
              src="https://cdn.pixabay.com/photo/2017/02/01/21/47/cube-2031512__340.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default BannerSection;
