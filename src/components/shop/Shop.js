import React from "react";
import Navbar from "../Navbar";
import ShopGrid from "./ShopGrid";
import Sidebar from "./Sidebar";

const Shop = (props) => {
  return (
    <section className="bg-zinc-800 bg-center bg-cover h-full flex flex-col">
      <Navbar cart={props.cart}/>
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <ShopGrid cart={props.cart}/>
      </div>
    </section>
  );
};

export default Shop;
