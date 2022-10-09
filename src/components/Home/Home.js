import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";
const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);
  const handleAddtoCart = (tshirt) => {
    const exists = cart.find((ts) => ts.id === tshirt.id);
    if (exists) {
      alert("Cart is already added.");
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
  };
  const handleRemoveCart = (tshirt) => {
    const remaining = cart.filter((ts) => ts.id !== tshirt.id);
    setCart(remaining);
  };
  return (
    <div className="home-container">
      <div className="tshirt-container">
        {tshirts.map((tshirt) => (
          <Tshirt
            key={tshirt.id}
            tshirt={tshirt}
            handleAddtoCart={handleAddtoCart}
          ></Tshirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart>
      </div>
    </div>
  );
};
export default Home;
