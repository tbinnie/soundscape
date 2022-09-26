import React from "react";
import Item from "./Item";

const ShopGrid = () => {
  return (
    <section className="p-12 flex justify-center items-center w-[90%]">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-40 p-8">
        <Item name="Zoom F6" price={499.99} />
        <div className="h-56 w-56 border-white border-4">1</div>
        <div className="h-56 w-56 border-white border-4">1</div>
        <div className="h-56 w-56 border-white border-4">1</div>
        <div className="h-56 w-56 border-white border-4">1</div>
        <div className="h-56 w-56 border-white border-4">1</div>
        <div className="h-56 w-56 border-white border-4">1</div>
        <div className="h-56 w-56 border-white border-4">1</div>
        <div className="h-56 w-56 border-white border-4">1</div>
      </div>
    </section>
  );
};

export default ShopGrid;
