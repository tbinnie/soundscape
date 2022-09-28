import React from "react";
import Navbar from "../Navbar";
import Search from "../Search";
import Splash from "./Splash";

const Landing = (props) => {
  return (
    <section className="bg-[url('./imgs/forest.jpg')] bg-center bg-cover h-screen flex flex-col">
      <Search />
      <Navbar cart ={props.cart} />
      <Splash />
      <p className="text-emerald-300 absolute bottom-5  left-[15%] lg:left-5 text-shadow">Photo by <a href="https://unsplash.com/@martinsanchez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Martin Sanchez</a> on <a href="https://unsplash.com/s/photos/stream?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
    </section>
  );
};

export default Landing;
