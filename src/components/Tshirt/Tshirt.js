import React from "react";

const Tshirt = ({ tshirt }) => {
  const { name, picture, price } = tshirt;
  return <div>
    <h3>{name}</h3>
    <img src={picture} alt="" />
    <p>{price}</p>
  </div>;
};

export default Tshirt;
