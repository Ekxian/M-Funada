import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { FaTrash } from "react-icons/fa";

import OrderSumamry from "../components/ordersSection/OrderSumamry";
import Footer from "../components/footer/Footer";

const Orders = ({
  cartItems,
  handleRemoveItem,
  subtotal,
  discount,
  promoCode,
  setPromoCode,
  applyPromoCode,
  discountedTotal,
}) => {
  const navigate = useNavigate();

  const DELIVERY_FEE = Object.keys(cartItems).length > 0 ? 50 : 0;

  const isActiveBtn = () => {
    return Object.keys(cartItems).length > 0 ? "" : "disabled";
  };

  return (
    <div>
      <div className="container mt-5 pt-5">
        <motion.div
          className="row shadow p-5 mt-3 table-responsive"
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="mb-3">
            <strong>
              Your <span style={{ color: "#E9762B" }}>Orders</span>
            </strong>
          </h1>
          {Object.values(cartItems).length > 0 ? (
            <table className="table table-hover">
              <thead>
                <tr className="text-secondary">
                  <th scope="col" className="text-secondary">
                    #
                  </th>
                  <th scope="col" className="text-secondary">
                    IMAGE
                  </th>
                  <th scope="col" className="text-secondary">
                    NAME
                  </th>
                  <th scope="col" className="text-secondary">
                    CODE
                  </th>
                  <th scope="col" className="text-secondary">
                    PRICE
                  </th>
                  <th scope="col" className="text-secondary">
                    QUANTITY
                  </th>
                  <th scope="col" className="text-secondary">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody className="table-group-divider ">
                {Object.values(cartItems).map((item, index) => (
                  <tr key={item.id}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <img
                        src={item.image}
                        alt={item.product}
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                      />
                    </td>
                    <td>{item.product}</td>
                    <td>{item.code}</td>
                    <td>₱{item.price.toFixed(2)}</td>
                    <td>{item.count}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => handleRemoveItem(item.id)}
                        className="btn btn-danger d-flex  align-items-center"
                        style={{ width: "40px", height: "40px" }}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-muted">Your cart is empty.</p>
          )}
        </motion.div>
        {/* Order Summary Section */}
        <div className="mb-5">
          <motion.div
            className="row mt-4"
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="col-lg-6 shadow p-5">
              <h3>
                <strong>
                  Order <span style={{ color: "#E9762B" }}>Summary</span>
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
              <button
                type="button"
                className={`btn text-white ${isActiveBtn()}`}
                style={{ backgroundColor: "#e9762b" }}
                onClick={() => {
                  navigate("/mfunada/checkout");
                }}
              >
                Proceed to Checkout
              </button>
            </div>
            <div className="col-lg-6 p-5 mt-lg-5">
              <label htmlFor="promoCodeInput" className="form-label">
                Enter your promo code here
              </label>
              <div className="d-flex align-items-center justify-content-center">
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="promoCodeInput"
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button
                  type="button"
                  className="btn btn-dark text-white rounded-0"
                  onClick={() => applyPromoCode(promoCode)}
                >
                  SUBMIT
                </button>
              </div>
              {/* Promo Code List */}
              <div className="mt-3">
                <p className="text-secondary mb-1">Available Promo Codes:</p>
                <ul className="list-unstyled text-secondary">
                  <li>
                    <strong>DISCOUNT10</strong> - 10% off
                  </li>
                  <li>
                    <strong>DISCOUNT20</strong> - 20% off
                  </li>
                  <li>
                    <strong>DISCOUNT50</strong> - 50% off
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Orders;
