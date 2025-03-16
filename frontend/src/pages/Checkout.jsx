import React, { useState } from "react";
import Footer from "../components/footer/Footer";

import "../pages/css/checkout.css";

const Checkout = ({
  cartItems,
  subtotal,
  discount,
  discountedTotal,
  placeOrder,
}) => {
  const DELIVERY_FEE = Object.keys(cartItems).length > 0 ? 50 : 0;

  const [selectedPayment, setSelectedPayment] = useState("COD");
  return (
    <div>
      <div className="container my-5 pt-5">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-6 shadow p-5">
            <h2>
              <strong>
                Delivery <span style={{ color: "#E9762B" }}>Information</span>
              </strong>
            </h2>
            {/* FORMS */}
            <div className="d-flex mb-2">
              <input
                type="text"
                className="form-control rounded-0 me-2"
                id=""
                placeholder="First Name"
              />
              <input
                type="text"
                className="form-control rounded-0"
                id=""
                placeholder="Last Name"
              />
            </div>

            <input
              type="text"
              className="form-control rounded-0 mb-2"
              id=""
              placeholder="Email"
            />

            <input
              type="text"
              className="form-control rounded-0 mb-2"
              id=""
              placeholder="Street"
            />

            <div className="d-flex mb-2">
              <input
                type="text"
                className="form-control rounded-0 me-2"
                id=""
                placeholder="City"
              />
              <input
                type="text"
                className="form-control rounded-0"
                id=""
                placeholder="Province"
              />
            </div>
            <div className="d-flex mb-2">
              <input
                type="text"
                className="form-control rounded-0 me-2"
                id=""
                placeholder="Zip Code"
              />
              <input
                type="text"
                className="form-control rounded-0"
                id=""
                placeholder="Phone Number"
              />
            </div>
          </div>

          <div className="col-lg-6 p-5">
            <h3>
              <strong>
                Order <span style={{ color: "#E9762B" }}>Total</span>
              </strong>
            </h3>

            <div className="d-flex justify-content-between border-bottom text-secondary">
              <p>SUBTOTAL</p>
              <p> ₱{subtotal.toFixed(2)}</p>
            </div>
            <div className="d-flex justify-content-between border-bottom text-secondary">
              <p>DELIVERY FEE</p>
              <p> ₱{DELIVERY_FEE.toFixed(2)}</p>
            </div>
            {discount > 0 && (
              <div className="d-flex justify-content-between border-bottom text-success">
                <p>DISCOUNT</p>
                <p>₱-{discount.toFixed(2)}</p>
              </div>
            )}
            <div className="d-flex justify-content-between">
              <p>TOTAL</p>
              <p> ₱{discountedTotal.toFixed(2)}</p>
            </div>

            {/*  */}
            <h3 className="mt-3">
              <strong>
                Payment <span style={{ color: "#E9762B" }}>Method</span>
              </strong>
            </h3>

            {/* COD Option */}
            <div
              className={`form-check border col-12 col-lg-6 p-3 d-flex align-items-center gap-2 ${
                selectedPayment === "COD" ? "active-payment" : ""
              }`}
              onClick={() => setSelectedPayment("COD")}
            >
              <input
                className="form-check-input ms-2"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked={selectedPayment === "COD"}
                onChange={() => setSelectedPayment("COD")}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                COD (Cash on Delivery)
              </label>
            </div>

            {/* Stripe Option */}
            <div
              className={`form-check border col-12 col-lg-6  p-3 d-flex align-items-center gap-2 ${
                selectedPayment === "Stripe" ? "active-payment" : ""
              }`}
              onClick={() => setSelectedPayment("Stripe")}
            >
              <input
                className="form-check-input ms-2"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked={selectedPayment === "Stripe"}
                onChange={() => setSelectedPayment("Stripe")}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Stripe (Credit or Debit)
              </label>
            </div>

            <button
              type="button"
              className="btn btn-place-order text-white mt-2"
              onClick={placeOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
