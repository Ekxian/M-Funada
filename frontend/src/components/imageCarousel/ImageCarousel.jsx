import React from "react";
import "./imageCarousel.css";

import IMGS1 from "../../assets/IMGS1.png";
import IMGS2 from "../../assets/IMGS2.png";
import IMGS3 from "../../assets/IMGS3.png";

const ImageCarousel = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={IMGS1}
              className="d-block w-100 carousel-height"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={IMGS2}
              className="d-block w-100 carousel-height"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={IMGS3}
              className="d-block w-100 carousel-height"
              alt="..."
            />
          </div>
          <div className="carousel-overlay"></div> {/* Overlay div */}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
