import React, { useState } from "react";

function Item({ name, category }) {
  let [isInCart, setIsInCart] = useState(false);

  function handleClick() {
    setIsInCart((isInCart) => !isInCart);
  }
  const itemClass = isInCart ? "in-cart" : ""
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={itemClass} onClick={handleClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
