import React from "react";

const Cart = ({ cart, handleRemoveCart }) => {
  return (
    <div>
      <h2>This is a Cart.</h2>
      <p>Ordered items : {cart.length}</p>
      {cart.map((tshirt) => (
        <p key={tshirt.id}>
          {tshirt.name}
          <button onClick={() => handleRemoveCart(tshirt)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
