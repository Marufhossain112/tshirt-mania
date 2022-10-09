import React from "react";
import Cart from "../Cart/Cart";
import "./Tshirt.css";

const Tshirt = ({ tshirt, handleAddtoCart }) => {
  const { name, picture, price } = tshirt;
  return (
    <div className="t-shirt">
      <img src={picture} alt="" />
      <h3>{name}</h3>
      <p>Price : {price}</p>
      <button onClick={() => handleAddtoCart(tshirt)}>Buy This</button>
    </div>
  );
};

export default Tshirt;
