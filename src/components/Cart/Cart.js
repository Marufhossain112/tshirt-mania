import React from "react";
import "./Cart.css";
const Cart = ({ cart, handleRemoveCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please buy at least one item.</p>;
  } else if (cart.length === 1) {
    message = (
      <div>
        <div>
          <p>Moore jonnon kino</p>
          <p>Moore baher lagi kino</p>
          <p>Moore dardar lagi kino</p>
        </div>
      </div>
    );
  } else {
    message = <p>Thanks for purchasing !</p>;
  }
  return (
    <div>
      <h2 className={cart.length === 0 ? "orange" : "purple"}>
        This is a Cart.
      </h2>
      <p>Ordered items : {cart.length}</p>
      {cart.map((tshirt) => (
        <p key={tshirt.id}>
          {tshirt.name}
          <button onClick={() => handleRemoveCart(tshirt)}>X</button>
        </p>
      ))}
      {message}
      {cart.length === 3 ? (
        <p>I am giving 3 gift to you</p>
      ) : (
        <p>I have give you many gift.</p>
      )}
    </div>
  );
};

export default Cart;
