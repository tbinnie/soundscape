import React from "react";

const Sidebar = () => {
  return (
    <section className="p-4 flex justify-end items-start w-[15%] right-shadow">
      <div className="sidebar_wrapper rounded-xl text-white p-4 flex flex-col gap-12 text-right">
        <div>
            <h3 className="text-2xl  text-emerald-300">Shop/</h3>
            <h2 className="text-4xl">All Brands</h2>
        </div>
        <div className="flex flex-col gap-4">
            <h2 className="text-4xl">Zoom</h2>
            <h2 className="text-4xl">Sony</h2>
            <h2 className="text-4xl">Tascam</h2>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
