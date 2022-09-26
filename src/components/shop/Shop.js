import React from "react";
import Navbar from "../Navbar";
import ShopGrid from "./ShopGrid";
import Sidebar from "./Sidebar";

const Shop = () => {
  return (
    <section className="bg-zinc-800 bg-center bg-cover h-full flex flex-col">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <ShopGrid />
      </div>
    </section>
  );
};

export default Shop;
