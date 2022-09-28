import React from "react";
import { Link } from "react-router-dom";
import f6 from "../../imgs/mics/F6.png";

const Splash = () => {
  return (
    <section className="h-full flex justify-center items-center">
      <div className="splash__wrapper flex flex-col justify-center items-center rounded-xl  pb-16 gap-10">
        <h1 className="text-6xl p-2 lg:p-0 lg:text-7xl text-emerald-300 font-bold text-shadow">
          THE CLEAREST SOUND, NATURALLY.
        </h1>
        <Link to="/shop">
          <button className="text-2xl text-white bg-emerald-400 h-12 w-48 rounded-full border-white border-2 border-b-4 animate-pulse hover:bg-emerald-600">
            SHOP NOW
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Splash;
