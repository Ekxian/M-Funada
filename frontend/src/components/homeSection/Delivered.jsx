import React from "react";

import { BiSolidBasket } from "react-icons/bi";

import "./delivered.css";

const Delivered = () => {
  return (
    <div className="container mt-5">
      {/* ROW 1 TITLE */}
      <div className="row d-flex justify-content-between align-items-center">
        <h2 className="col-lg-3">
          <strong>
            Best <span style={{ color: "#E9762B" }}>Delivered</span> Categories
          </strong>
        </h2>
        <p className="col-lg-3">
          <small>
            Here are some of our best distributed categories.
            <span style={{ color: "#E9762B" }}>Order now!</span>
          </small>
        </p>
      </div>

      {/* ROW 2: CARDS */}
      <div className="row my-5 justify-content-center">
        {/* CARD 1 */}
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-2 d-flex justify-content-center">
          <div className="card h-100" style={{ width: "18rem" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-pdH0qh12XweymWNkJZdjV-NAovekfQeaKw&s"
              className="card-img-top"
              style={{ width: "100%", height: "18rem", objectFit: "cover" }}
              alt="..."
            />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">Ikinamada</h5>
                <h5 className="card-title" style={{ color: "#e9762b" }}>
                  <strong>₱59</strong>
                </h5>
              </div>
              <p className="card-text">
                <small>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </small>
              </p>
              <div className="d-grid gap-2">
                <button className="btn-basket btn">
                  <BiSolidBasket className="fs-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-2 d-flex justify-content-center">
          <div className="card h-100" style={{ width: "18rem" }}>
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/chicken-empanada-1jpg-1651248642.jpg?crop=0.6794177386594448xw:1xh;center,top&resize=1200:*"
              className="card-img-top"
              style={{ width: "100%", height: "18rem", objectFit: "cover" }}
              alt="..."
            />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">Ikinamada</h5>
                <h5 className="card-title" style={{ color: "#e9762b" }}>
                  <strong>₱59</strong>
                </h5>
              </div>
              <p className="card-text">
                <small>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </small>
              </p>
              <div className="d-grid gap-2">
                <button className="btn-basket btn">
                  <BiSolidBasket className="fs-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-2 d-flex justify-content-center">
          <div className="card h-100" style={{ width: "18rem" }}>
            <img
              src="https://salimaskitchen.com/wp-content/uploads/2023/08/DSC01303.jpg"
              className="card-img-top"
              style={{ width: "100%", height: "18rem", objectFit: "cover" }}
              alt="..."
            />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">Ikinamada</h5>
                <h5 className="card-title" style={{ color: "#e9762b" }}>
                  <strong>₱59</strong>
                </h5>
              </div>
              <p className="card-text">
                <small>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </small>
              </p>
              <div className="d-grid gap-2">
                <button className="btn-basket btn">
                  <BiSolidBasket className="fs-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivered;
