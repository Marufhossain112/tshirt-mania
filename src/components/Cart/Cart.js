import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>This is a Cart.</h2>
      <p>Ordered items : {cart.length}</p>
    </div>
  );
};

export default Cart;
