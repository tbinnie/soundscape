import React, { useState } from "react";
import PropTypes from "prop-types";

const Item = (props) => {
  const [cart, setCart] = props.cart;
  return (
    <div className=" w-80 pb-8 flex flex-col shadow-xl justify-evenly items-center bg-emerald-700 rounded-xl gap-4">
      <img src={props.img} className="h-auto w-80 rounded-t-xl shadow-lg" />
      <h1 className="text-white text-4xl">{props.name}</h1>
      <h2 className="text-white text-3xl">£{props.price}</h2>
      <button
        className="bg-white text-xl p-4 border-emerald-400 border-4 hover:text-white hover:bg-emerald-400"
        onClick={() => {
          if (
            cart
              .map((item) => {
                return item.id;
              })
              .includes(props.id) === false
          ) {
            setCart((prevState) => [
              ...prevState,
              {
                name: props.name,
                price: props.price,
                id: props.id,
                img: props.img,
                quantity: 1,
              },
            ]);
          } else {
            alert("Already in cart");
          }
        }}
      >
        {cart.map(item => item.id).includes(props.id) ? "In cart!" : 'Add to cart'} 
      </button>
    </div>
  );
};

Item.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Item;
