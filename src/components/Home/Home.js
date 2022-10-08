import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";
const Home = () => {
  const tshirts = useLoaderData();
  const handleAddtoCart = (tshirts) => {
    console.log(tshirts);
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
        <Cart></Cart>
      </div>
    </div>
  );
};
export default Home;
