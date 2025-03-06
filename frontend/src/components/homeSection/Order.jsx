import React from "react";
import { BiSolidBasket } from "react-icons/bi";

import "./order.css";

const Order = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-5">
        <strong>
          How To <span style={{ color: "#E9762B" }}>Order?</span>
        </strong>
      </h2>

      <div className="row d-flex justify-content-center gx-2 gy-4 mx-5 px-5">
        {/* BOX 1 */}
        <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
          <div className="p-4 shadow d-flex flex-column justify-content-between align-items-center text-center square-box">
            <div className="d-flex justify-content-between align-items-center w-100">
              <h1 style={{ color: "#E9762B", fontSize: "60px" }}>
                <strong>01</strong>
              </h1>
              <BiSolidBasket className="fs-2" style={{ color: "#E9762B" }} />
            </div>
            <p>
              <small>
                <strong>Go to Menu and pick your orders.</strong>
              </small>
            </p>
          </div>
        </div>

        {/* BOX 2 */}
        <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
          <div className="p-4 shadow d-flex flex-column justify-content-between align-items-center square-box">
            <div className="d-flex justify-content-between align-items-center w-100">
              <h1 style={{ color: "#E9762B", fontSize: "60px" }}>
                <strong>02</strong>
              </h1>
              <BiSolidBasket className="fs-2" style={{ color: "#E9762B" }} />
            </div>
            <p>
              <small>
                <strong>Once finished, proceed to checkout.</strong>
              </small>
            </p>
          </div>
        </div>

        {/* BOX 3 */}
        <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
          <div className="p-4 shadow d-flex flex-column justify-content-between align-items-center square-box">
            <div className="d-flex justify-content-between align-items-center w-100">
              <h1 style={{ color: "#E9762B", fontSize: "60px" }}>
                <strong>03</strong>
              </h1>
              <BiSolidBasket className="fs-2" style={{ color: "#E9762B" }} />
            </div>
            <p>
              <small>
                <strong>Pick your mode of delivery and payment.</strong>
              </small>
            </p>
          </div>
        </div>

        {/* BOX 4 */}
        <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
          <div className="p-4 shadow d-flex flex-column justify-content-between align-items-center square-box">
            <div className="d-flex justify-content-between align-items-center w-100">
              <h1 style={{ color: "#E9762B", fontSize: "60px" }}>
                <strong>04</strong>
              </h1>
              <BiSolidBasket className="fs-2" style={{ color: "#E9762B" }} />
            </div>
            <p>
              <small>
                <strong>Submit and wait for your order to arrive!</strong>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
