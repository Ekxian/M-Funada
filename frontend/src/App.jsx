import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./components/navBar/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Orders from "./pages/Orders.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mfunada/menu" element={<Menu />} />
        <Route path="/mfunada/about-us" element={<AboutUs />} />
        {/* <Route path="/mfunada/find-us" element={<FindUs />} /> */}
        <Route path="/mfunada/orders" element={<Orders />} />
      </Routes>
    </div>
  );
};

export default App;
