import React from "react";
import PropTypes from "prop-types";

const Item = (props) => {
  return (
    <div className="w-80 h-96 flex flex-col bg-white">
      <img src={props.img} />
      <h1>{props.name}</h1>
      <h2>£{props.price}</h2>
      <button>Add to basket</button>
    </div>
  );
};

Item.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Item;
