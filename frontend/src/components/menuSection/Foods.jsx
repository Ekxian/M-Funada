import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";

import SL1 from "../../assets/SL1.png";
import IK1 from "../../assets/IK1.png";

import SL2 from "../../assets/SL2.png";
import SL3 from "../../assets/SL3.png";
import IK2 from "../../assets/IK2.png";
import IK3 from "../../assets/IK3.png";

import SL4 from "../../assets/SL4.png";
import SL5 from "../../assets/SL5.png";
import SL6 from "../../assets/SL6.png";
import SL7 from "../../assets/SL7.png";
import IK4 from "../../assets/IK4.png";
import IK5 from "../../assets/IK5.png";
import IK6 from "../../assets/IK6.png";
import IK7 from "../../assets/IK7.png";

import BU1 from "../../assets/BU1.png";
import BU2 from "../../assets/BU2.png";
import BU3 from "../../assets/BU3.png";

const Foods = ({ cartItems, handleAddItem, handleSubtractItem }) => {
  const soloItems = [
    {
      id: 1,
      code: "SL1",
      product: "Sharapanada",
      price: 59,
      image: SL1,
      description:
        "A crispy moringa empanada filled with marinated ground pork, cucumber, tomato, and onion. Served hot with Sharapanada Sauce.",
    },
    {
      id: 2,
      code: "IK1",
      product: "Ikinamada ",
      price: 59,
      image: IK1,
      description:
        "A crispy moringa empanada filled with marinated pork, fermented vegetables, and bold spices. Served hot with Ikinamada Cheese Sauce.",
    },
  ];

  const comboOneItems = [
    {
      id: 3,
      code: "SL2",
      product: "Sharapanada w/ Mango Juice & Shawarma Sauce",
      price: 75,
      image: SL2,
      description:
        "A savory flavorful meat and fresh veggies, paired with mango juice and our rich shawarma sauce for a perfect balance",
    },
    {
      id: 4,
      code: "SL3",
      product: "Sharapanada w/ Avocado Juice & Shawarma Sauce",
      price: 75,
      image: SL3,
      description:
        "A savory flavorful meat and fresh veggies, paired with avocado juice and our rich shawarma sauce for a perfect balance.",
    },
    {
      id: 5,
      code: "IK2",
      product: "Ikinamada w/ Avocado Juice & Cheese Sauce",
      price: 75,
      image: IK2,
      description:
        "A savory flavorful meat and fresh veggies, paired with avocado juice and our rich shawarma sauce for a perfect balance.",
    },
    {
      id: 6,
      code: "IK3",
      product: "Ikinamada w/ Mango Juice & Cheese Sauce",
      price: 75,
      image: IK3,
      description:
        "A flavorful, seasoned creamy cheese sauce, paired with refreshing avocado juice for a perfect taste balance.",
    },
  ];

  const comboTwoItems = [
    {
      id: 7,
      code: "SL4",
      product:
        "Sharapanada w/ Avocado Juice, Potato French Fries, & Shawarma Sauce",
      price: 75,
      image: SL4,
      description:
        "A crunchy Sharapanada M'FUNada served with golden fries, refreshing avocado juice, and bold garlicky shawarma sauce for a deliciously balanced meal.",
    },
    {
      id: 8,
      code: "SL5",
      product: "Sharapanada w/ Mango Juice, Fried Plantain, & Shawarma Sauce",
      price: 75,
      image: SL5,
      description:
        "Enjoy a crispy Sharapanada M'FUNada with sweet fried plantains, tropical mango juice, and rich, aromatic shawarma sauce for a flavorful, satisfying combo.",
    },
    {
      id: 9,
      code: "SL6",
      product: "Sharapanada w/ Avocado Juice, Fried Plantain, & Shawarma Sauce",
      price: 75,
      image: SL6,
      description:
        "Savor a crunchy Sharapanada M'FUNada with caramelized plantains, smooth avocado juice, and zesty shawarma sauce for a well-rounded and filling meal.",
    },
    {
      id: 10,
      code: "SL7",
      product:
        "Sharapanada w/ Mango Juice, Potato French Fries, & Shawarma Sauce",
      price: 75,
      image: SL7,
      description:
        "A crispy Sharapanada M'FUNada paired with crispy fries, sweet mango juice, and creamy shawarma sauce—an irresistible mix of textures and bold flavors.",
    },
    {
      id: 11,
      code: "IK4",
      product: "Ikinamada w/ Avocado Juice, Fried Plantain, & Cheese Sauce",
      price: 75,
      image: IK4,
      description:
        "The rich and savory Ikinamada M'FUNada is paired with creamy cheese sauce, sweet fried plantains, and smooth avocado juice for a delightful meal.",
    },
    {
      id: 12,
      code: "IK5",
      product: "Ikinamada w/  Mango Juice, Potato French Fries, & Cheese Sauce",
      price: 75,
      image: IK5,
      description:
        "Satisfy your cravings with an Ikinamada M'FUNada, served with velvety cheese sauce, crisp potato fries, and mango juice for a deliciously complete meal.",
    },
    {
      id: 13,
      code: "IK6",
      product: "Ikinamada w/ Mango Juice, Fried Plantain, and Cheese Sauce",
      price: 75,
      image: IK6,
      description:
        "Enjoy the savory Ikinamada M'FUNada with luscious cheese sauce, caramelized plantains, and mango juice—a delicious contrast of flavors in every bite.",
    },
    {
      id: 14,
      code: "IK7",
      product:
        "Ikinamada w/ Avocado Juice, Potato French Fries, and Cheese Sauce",
      price: 75,
      image: IK7,
      description:
        "A flavorful Ikinamada M'FUNada with creamy cheese sauce, crispy fries, and avocado juice creates a well-balanced, indulgent, and refreshing meal",
    },
  ];

  const bundleItems = [
    {
      id: 15,
      code: "BU1",
      product: "4pcs of Sharapanada w/ Shawarma Sauce",
      price: 75,
      image: BU1,
      description:
        "Our M'FUNada Sharapanada is a delightful twist on our signature M'FUNada, available in a bundle of four per box. Wrapped in our unique moringa (malunggay) empanada dough, it’s filled with a savory blend of seasoned ground pork, crisp cucumber, juicy tomato, and onion.",
    },
    {
      id: 16,
      code: "BU2",
      product: "4pcs of Ikinamada  w/ Cheese Sauce",
      price: 75,
      image: BU2,
      description:
        "The M'FUNada Ikinamada is a bold and flavorful delicacy with a hint of spice. Each box contains four pieces, featuring marinated pork infused with a balanced mix of savory, salty, sour, and spicy flavors, along with tangy fermented vegetables.",
    },
    {
      id: 17,
      code: "BU3",
      product: "4pcs Assorted M'Funada w/ sauce of your choosing",
      price: 75,
      image: BU3,
      description:
        "This bundle lets you enjoy both varieties of our moringa empanadas—Sharapanada and Ikinamada. Customers can mix and match their preferred flavors, choosing four pieces per box.",
    },
  ];
  return (
    <div className="container my-5">
      {/* ============================ */}
      {/* SOLO MEALS */}
      <motion.h1
        style={{ color: "#E9762B" }}
        initial={{ opacity: 0, translateX: -50 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
      >
        <strong>Solo Meal</strong>
      </motion.h1>
      <div className="row justify-content-center">
        {soloItems.map((solo) => (
          <div
            key={solo.id}
            className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 d-flex justify-content-center"
          >
            <motion.div
              className="card h-100 shadow position-relative"
              style={{ width: "18rem" }}
              initial={{ opacity: 0, translateY: 50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }} // Triggers when 30% is in view
            >
              <img
                src={solo.image}
                className="card-img-top"
                style={{ width: "100%", height: "21rem", objectFit: "cover" }}
                alt={solo.product}
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">{solo.product}</h5>
                  <h5 className="card-title ps-2" style={{ color: "#e9762b" }}>
                    <strong>₱{solo.price}</strong>
                  </h5>
                </div>
                <p className="card-text " style={{ textAlign: "justify" }}>
                  <small>{solo.description}</small>
                </p>

                {/* BUTTON LOGIC FOR ADDING ITEMS */}
                <div className="position-absolute top-50 end-0 translate-middle-y mt-4 me-1">
                  <div className="d-flex flex-row-reverse align-items-center">
                    <div className="d-flex bg-white p-1 rounded-pill">
                      {/* Show counter and subtract button only if item count is > 0 */}
                      {cartItems[solo.id] && (
                        <div className="d-flex align-items-center">
                          <button
                            type="button"
                            className="btn btn-danger rounded-circle d-flex justify-content-center align-items-center"
                            style={{ width: "40px", height: "40px" }}
                            onClick={() => handleSubtractItem(solo.id)}
                          >
                            <FaMinus />
                          </button>
                          <p className="mb-0 px-3">
                            <strong>{cartItems[solo.id]?.count || 0}</strong>
                          </p>
                        </div>
                      )}
                      {/* Add button */}
                      <button
                        type="button"
                        className="btn btn-success rounded-circle d-flex justify-content-center align-items-center"
                        style={{ width: "40px", height: "40px" }}
                        onClick={() => handleAddItem(solo)}
                      >
                        <FaPlus className="fs-6" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* ============================ */}
      {/* COMBO MEALS 1*/}
      <motion.h1
        style={{ color: "#E9762B" }}
        initial={{ opacity: 0, translateX: -50 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
      >
        <strong>Combo Meal</strong>
      </motion.h1>
      <div className="row justify-content-center">
        {comboOneItems.map((combo) => (
          <div
            key={combo.id}
            className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 d-flex justify-content-center"
          >
            <motion.div
              className="card h-100 shadow position-relative"
              style={{ width: "18rem" }}
              initial={{ opacity: 0, translateY: 50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }} // Triggers when 30% is in view
            >
              <img
                src={combo.image}
                className="card-img-top"
                style={{ width: "100%", height: "21rem", objectFit: "cover" }}
                alt={combo.product}
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">{combo.product}</h5>
                  <h5 className="card-title ps-2" style={{ color: "#e9762b" }}>
                    <strong>₱{combo.price}</strong>
                  </h5>
                </div>
                <p className="card-text " style={{ textAlign: "justify" }}>
                  <small>{combo.description}</small>
                </p>

                {/* BUTTON LOGIC FOR ADDING ITEMS */}
                <div className="position-absolute top-50 end-0 translate-middle-y me-1">
                  <div className="d-flex flex-row-reverse align-items-center">
                    <div className="d-flex bg-white p-1 rounded-pill">
                      {/* Show counter and subtract button only if item count is > 0 */}
                      {cartItems[combo.id] && (
                        <div className="d-flex align-items-center">
                          <button
                            type="button"
                            className="btn btn-danger rounded-circle d-flex justify-content-center align-items-center"
                            style={{ width: "40px", height: "40px" }}
                            onClick={() => handleSubtractItem(combo.id)}
                          >
                            <FaMinus />
                          </button>
                          <p className="mb-0 px-3">
                            <strong>{cartItems[combo.id]?.count || 0}</strong>
                          </p>
                        </div>
                      )}
                      {/* Add button */}
                      <button
                        type="button"
                        className="btn btn-success rounded-circle d-flex justify-content-center align-items-center"
                        style={{ width: "40px", height: "40px" }}
                        onClick={() => handleAddItem(combo)}
                      >
                        <FaPlus className="fs-6" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* ============================ */}
      {/* COMBO MEALS 2*/}
      <div
        className="row justify-content-center"
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
      >
        {comboTwoItems.map((combo) => (
          <div
            key={combo.id}
            className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 d-flex justify-content-center"
          >
            <motion.div
              className="card h-100 shadow position-relative"
              style={{ width: "18rem" }}
              initial={{ opacity: 0, translateY: 50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }} // Triggers when 30% is in view
            >
              <img
                src={combo.image}
                className="card-img-top"
                style={{ width: "100%", height: "21rem", objectFit: "cover" }}
                alt={combo.product}
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">{combo.product}</h5>
                  <h5 className="card-title ps-2" style={{ color: "#e9762b" }}>
                    <strong>₱{combo.price}</strong>
                  </h5>
                </div>
                <p className="card-text " style={{ textAlign: "justify" }}>
                  <small>{combo.description}</small>
                </p>

                {/* BUTTON LOGIC FOR ADDING ITEMS */}
                <div className="position-absolute top-50 end-0 translate-middle-y pb-4 me-1">
                  <div className="d-flex flex-row-reverse align-items-center">
                    <div className="d-flex bg-white p-1 rounded-pill">
                      {/* Show counter and subtract button only if item count is > 0 */}
                      {cartItems[combo.id] && (
                        <div className="d-flex align-items-center">
                          <button
                            type="button"
                            className="btn btn-danger rounded-circle d-flex justify-content-center align-items-center"
                            style={{ width: "40px", height: "40px" }}
                            onClick={() => handleSubtractItem(combo.id)}
                          >
                            <FaMinus />
                          </button>
                          <p className="mb-0 px-3">
                            <strong>{cartItems[combo.id]?.count || 0}</strong>
                          </p>
                        </div>
                      )}
                      {/* Add button */}
                      <button
                        type="button"
                        className="btn btn-success rounded-circle d-flex justify-content-center align-items-center"
                        style={{ width: "40px", height: "40px" }}
                        onClick={() => handleAddItem(combo)}
                      >
                        <FaPlus className="fs-6" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* ============================ */}
      {/* BUNDLE MEALS 1*/}
      <motion.h1
        style={{ color: "#E9762B" }}
        initial={{ opacity: 0, translateX: -50 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
      >
        <strong>Bundle Meal</strong>
      </motion.h1>
      <div className="row justify-content-center">
        {bundleItems.map((bundle) => (
          <div
            key={bundle.id}
            className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 d-flex justify-content-center"
          >
            <motion.div
              className="card h-100 shadow position-relative"
              style={{ width: "18rem" }}
              initial={{ opacity: 0, translateY: 50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }} // Triggers when 30% is in view
            >
              <img
                src={bundle.image}
                className="card-img-top"
                style={{ width: "100%", height: "21rem", objectFit: "cover" }}
                alt={bundle.product}
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">{bundle.product}</h5>
                  <h5 className="card-title ps-2" style={{ color: "#e9762b" }}>
                    <strong>₱{bundle.price}</strong>
                  </h5>
                </div>
                <p className="card-text " style={{ textAlign: "justify" }}>
                  <small>{bundle.description}</small>
                </p>

                {/* BUTTON LOGIC FOR ADDING ITEMS */}
                <div className="position-absolute top-50 end-0 translate-middle-y pb-5 me-1">
                  <div className="d-flex flex-row-reverse align-items-center">
                    <div className="d-flex bg-white p-1 rounded-pill">
                      {/* Show counter and subtract button only if item count is > 0 */}
                      {cartItems[bundle.id] && (
                        <div className="d-flex align-items-center">
                          <button
                            type="button"
                            className="btn btn-danger rounded-circle d-flex justify-content-center align-items-center"
                            style={{ width: "40px", height: "40px" }}
                            onClick={() => handleSubtractItem(bundle.id)}
                          >
                            <FaMinus />
                          </button>
                          <p className="mb-0 px-3">
                            <strong>{cartItems[bundle.id]?.count || 0}</strong>
                          </p>
                        </div>
                      )}
                      {/* Add button */}
                      <button
                        type="button"
                        className="btn btn-success rounded-circle d-flex justify-content-center align-items-center"
                        style={{ width: "40px", height: "40px" }}
                        onClick={() => handleAddItem(bundle)}
                      >
                        <FaPlus className="fs-6" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
