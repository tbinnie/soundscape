import React from "react";
import micIcon from "../imgs/icons/microphone-icon.svg";
import mountainIcon from "../imgs/icons/mountain-icon.svg";
import searchIcon from "../imgs/icons/search-icon.svg";
import shopIcon from "../imgs/icons/shopping-icon.svg"

const Navbar = () => {
  return (
    <header className=" pl-0 pr-0 pt-4 pb-4 xl:p-12 xl:pl-72 xl:pr-72 text-emerald-300 bg-zinc-800 shadow-sm shadow-emerald-300">
      <div className="navbar_wrapper flex flex-col xl:flex-row justify-between items-center gap-4 lg:gap-0">
        <div className="logo_wrapper flex flex-col">
          <h1 className="text-4xl flex items-center font-bold">
            S
            <img src={micIcon} className="inline h-8 w-auto fill-emerald-300" />
            UNDSC
            <img src={mountainIcon} className="inline h-8 w-auto" />
            PE
          </h1>
          <hr className="border-emerald-300"></hr>
          <p className="tracking-widest text-center text-emerald-200">
            FIELD RECORDERS
          </p>
        </div>
        <ul className="flex gap-20 text-3xl font-semibold justify-center items-center">
          <li>Shop</li>
          <li><img src={searchIcon} className="h-8 w-auto"/></li>
          <li><img src={shopIcon} className="h-10 w-auto"/></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
