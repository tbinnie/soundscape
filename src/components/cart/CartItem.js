import React from "react";

const CartItem = (props) => {
  const [cart, setCart] = props.cart;
  return (
    <div className="bg-zinc-800 rounded-xl p-12 flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-60">
      <div className="flex flex-col justify-center items-center text-white gap-4 text-center">
        {console.log(cart)}
        <h2 className="text-4xl">{props.name}</h2>
        <h3 className="text-3xl">£{props.price}</h3>
        <button
          className="bg-red-500 p-4 border-white border-2 text-white"
          onClick={() => {
            setCart((prevState) => [
              ...prevState.filter((item) => item.id != props.id),
            ]);
          }}
        >
          Remove from Cart
        </button>
      </div>
      <img className="bg-white w-40 rounded-r-xl" />
    </div>
  );
};

export default CartItem;
