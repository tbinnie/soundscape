import React from "react";
import Navbar from "../Navbar";
import CartItem from "./CartItem";

const Cart = (props) => {
  const [cart, setCart] = props.cart;

  return (
    <section className="bg-emerald-400 text-zinc-800 min-h-screen flex flex-col">
      <Navbar cart={props.cart} />
      <div className="p-24 text-center flex flex-col gap-6">
        <h1 className="text-6xl">Your Cart</h1>
        <h2 className="text-3xl">
          Subtotal: £{cart.reduce((prev, curr) => prev + curr.price, 0)}
        </h2>
        <button className="bg-zinc-800 text-white text-2xl p-4 ml-auto mr-auto border-2 border-b-4 border-r-4 border-white">
          Checkout
        </button>
      </div>
      <div className="p-12 ml-auto mr-auto flex flex-col gap-16">
        {cart.map((item) => (
          <CartItem
            name={item.name}
            price={item.price}
            key={item.id}
            quantity={props.quantity}
          />
        ))}
      </div>
    </section>
  );
};

export default Cart;
