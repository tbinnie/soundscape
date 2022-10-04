import { useState, useEffect, React } from "react";
import Item from "./Item";

const ShopGrid = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("items.json")
      .then((response) => response.json())
      .then((data) => setItems(data.items));
  }, []);

  return (
    <section className="lg:p-12 flex justify-center items-center lg:w-[90%]">
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-center items-center gap-16 lg:gap-40 pb-8 lg:p-8">
        {items.map((item) => (
          <Item
            name={item.name}
            price={item.price}
            img={item.image}
            key={item.id}
            cart={props.cart}
            id={item.id}
          />
        ))}
      </div>
    </section>
  );
};

export default ShopGrid;
