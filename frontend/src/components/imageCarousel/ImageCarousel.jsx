import React from "react";
import "./imageCarousel.css";

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
              src="https://media.istockphoto.com/id/1161677008/photo/latin-american-fried-empanadas-with-tomato-and-avocado-sauces-top-view.jpg?s=612x612&w=0&k=20&c=zkj70xzhKcLUHB5Bq47qnoAoqFFxXJMBwD6zBnQ3YTY="
              className="d-block w-100 carousel-height"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://placehold.co/600x400"
              className="d-block w-100 carousel-height"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://placehold.co/600x400"
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
