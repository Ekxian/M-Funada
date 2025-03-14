import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import { Link as ScrollLink, Element } from "react-scroll"; // react-scroll Link

import NavBar from "./components/navBar/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Orders from "./pages/Orders.jsx";
import ScrollTop from "./components/scrollUp/ScrollTop.jsx";

const App = () => {
  const [cartItems, setCartItems] = useState({});

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

  return (
    <div>
      <Element name="navBar">
        <NavBar cartCount={getTotalCartCount()} />
      </Element>
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
            <Orders cartItems={cartItems} handleRemoveItem={handleRemoveItem} />
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
