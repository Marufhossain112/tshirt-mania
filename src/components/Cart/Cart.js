import React from "react";

const Cart = ({ cart, handleRemoveCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please buy at least one item.</p>;
  } else if (cart.length === 1) {
    message = (
      <div>
        <p>Moore jonnon kino</p>
        <p>Moore baher lagi kino</p>
        <p>Moore dardar lagi kino</p>
      </div>
    );
  } else {
    message = <p>Thanks for purchasing !</p>;
  }
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
      {message}
    </div>
  );
};

export default Cart;
