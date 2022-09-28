import { React } from "react";
import micIcon from "../imgs/icons/microphone-icon.svg";
import mountainIcon from "../imgs/icons/mountain-icon.svg";
import searchIcon from "../imgs/icons/search-icon.svg";
import shopIcon from "../imgs/icons/shopping-icon.svg";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [cart, setCart] = props.cart;

  return (
    <header className=" pl-0 pr-0 pt-4 pb-4 xl:p-12 xl:pl-72 xl:pr-72 text-emerald-300 bg-zinc-800 shadow-sm shadow-emerald-300">
      <div className="navbar_wrapper flex flex-col xl:flex-row justify-between items-center gap-4 lg:gap-0">
        <Link to="/">
          <div className="logo_wrapper flex flex-col hover:scale-125">
            <h1 className="text-4xl flex items-center font-bold">
              S
              <img
                src={micIcon}
                className="inline h-8 w-auto fill-emerald-300"
              />
              UNDSC
              <img src={mountainIcon} className="inline h-8 w-auto" />
              PE
            </h1>
            <hr className="border-emerald-300"></hr>
            <p className="tracking-widest text-center text-emerald-200">
              FIELD RECORDERS
            </p>
          </div>
        </Link>
        <ul className="flex gap-20 text-3xl font-semibold justify-center items-center">
          <Link to="/shop">
            <li className="hover:scale-125">Shop</li>
          </Link>
          <li>
            <img src={searchIcon} className="h-8 w-auto hover:scale-125" />
          </li>
          <Link to="/cart">
            <li className="flex justify-center items-center">
              <img
                src={shopIcon}
                className="h-10 w-auto hover:scale-125 inline"
              />
              <p className="rounded-full bg-emerald-300 border-white border-2 z-10 text-zinc-800 w-10 h-10 flex justify-center items-center text-center ml-[-10px]">
                {cart.length}
              </p>
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
