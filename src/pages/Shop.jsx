import React from "react";
import Cards from "../components/Cards";
import { womensData } from "../mock/womensData.mock";

const Shop = () => {
  return (
    <div className="container">
      <h1>Shop</h1>
      <Cards cardsInfo={womensData} />
    </div>
  );
};

export default Shop;
