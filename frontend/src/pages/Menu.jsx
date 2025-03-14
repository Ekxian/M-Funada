import React from "react";
import { Element } from "react-scroll";

import Hero from "../components/menuSection/Hero";
import Foods from "../components/menuSection/Foods";
import Footer from "../components/footer/Footer";
import ScrollTop from "../components/scrollUp/ScrollTop";

const Menu = ({ cartItems, handleAddItem, handleSubtractItem }) => {
  return (
    <div>
      <Hero />
      <Foods
        cartItems={cartItems}
        handleAddItem={handleAddItem}
        handleSubtractItem={handleSubtractItem}
      />
      <Footer />
    </div>
  );
};

export default Menu;
