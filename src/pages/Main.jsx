import React from "react";
import Intro from "../components/Intro";
import Womens from "../components/Womens";

const Main = ({ addToCart, cart }) => {
  return (
    <main>
      <Intro />
      <Womens addToCart={addToCart} cart={cart} />
    </main>
  );
};

export default Main;
