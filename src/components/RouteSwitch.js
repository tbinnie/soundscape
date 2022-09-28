import React from "react";
import Landing from "./landing/Landing";
import Shop from "./shop/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./cart/Cart";

const RouteSwitch = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing cart={props.cart} />} />
        <Route path="/shop" element={<Shop cart={props.cart} />} />
        <Route path="/cart" element={<Cart cart={props.cart} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
