import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link as ScrollLink, Element } from "react-scroll"; // react-scroll Link
import { ToastContainer, toast } from "react-toastify";

import NavBar from "./components/navBar/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Orders from "./pages/Orders.jsx";
import ScrollTop from "./components/scrollUp/ScrollTop.jsx";
import Checkout from "./pages/Checkout.jsx";

const App = () => {
  const [cartItems, setCartItems] = useState({});
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const navigate = useNavigate();

  //================================
  //add-sub-del CART ITEMS
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]); // Logs cart items when updated

  const handleAddItem = (cartItem) => {
    setCartItems((prev) => ({
      ...prev,
      [cartItem.id]: {
        ...cartItem,
        count: (prev[cartItem.id]?.count || 0) + 1,
      },
    }));
  };

  const handleSubtractItem = (id) => {
    setCartItems((prev) => {
      if (!prev[id]) return prev;

      const updatedCart = { ...prev };
      updatedCart[id].count -= 1;

      if (updatedCart[id].count <= 0) delete updatedCart[id];

      return updatedCart;
    });
  };

  const getTotalCartCount = () => {
    return Object.values(cartItems).reduce(
      (total, item) => total + item.count,
      0
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      delete updatedCart[id]; // Remove item from cart
      return updatedCart;
    });
  };

  // ===========================
  // ORDER SECTION
  const DELIVERY_FEE = Object.keys(cartItems).length > 0 ? 50 : 0;

  // Calculate subtotal
  //    .values turns into array
  //   .reduce((total, item) => total + item.price * item.count, 0)

  // The .reduce() method iterates through the array and accumulates the subtotal.
  // total starts at 0 (the second argument of reduce()).
  // For each item, it adds item.price * item.count to total.
  const getSubtotal = () => {
    return Object.values(cartItems).reduce(
      (total, item) => total + item.price * item.count,
      0
    );
  };

  const subtotal = getSubtotal();
  const discountedTotal = subtotal + DELIVERY_FEE - discount;

  const promoCodes = {
    DISCOUNT10: 0.1,
    DISCOUNT20: 0.2,
    DISCOUNT50: 0.5,
  };

  const applyPromoCode = (code) => {
    const upperCode = code.toUpperCase();

    if (upperCode == "") {
      toast.info("Input promo code");
    } else {
      if (promoCodes[upperCode]) {
        if (Object.keys(cartItems).length > 0) {
          setDiscount(subtotal * promoCodes[upperCode]);
          toast.success("Promo code applied successfully!");
        } else {
          toast.info("Choose food to order.");
          setDiscount(0);
        }
      } else {
        toast.error("Invalid promo code!");
        setDiscount(0);
      }
    }
  };

  // CHECKOUT
  const placeOrder = () => {
    setCartItems({}); // Assuming cartItems is an object
    toast.success("Order placed successfully!");
    navigate("/"); // Redirect to home after placing order
  };

  return (
    <div>
      <Element name="navBar">
        <NavBar cartCount={getTotalCartCount()} />
      </Element>

      <ToastContainer position="top-center" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/mfunada/menu"
          element={
            <Menu
              cartItems={cartItems}
              handleAddItem={handleAddItem}
              handleSubtractItem={handleSubtractItem}
            />
          }
        />
        <Route path="/mfunada/about-us" element={<AboutUs />} />
        <Route
          path="/mfunada/orders"
          element={
            <Orders
              cartItems={cartItems}
              handleRemoveItem={handleRemoveItem}
              subtotal={subtotal}
              discount={discount}
              promoCode={promoCode}
              setPromoCode={setPromoCode}
              applyPromoCode={applyPromoCode}
              discountedTotal={discountedTotal}
            />
          }
        />

        <Route
          path="/mfunada/checkout"
          element={
            <Checkout
              cartItems={cartItems}
              subtotal={subtotal}
              discount={discount}
              discountedTotal={discountedTotal}
              placeOrder={placeOrder}
            />
          }
        />
      </Routes>
      <ScrollLink to="navBar" smooth={true} duration={500}>
        <ScrollTop />
      </ScrollLink>
    </div>
  );
};

export default App;
