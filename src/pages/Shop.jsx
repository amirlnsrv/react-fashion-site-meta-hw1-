import React, { useMemo, useState } from "react";
import Cards from "../components/Cards";
import { womensData } from "../mock/womensData.mock";

const Shop = ({ cart, addToCart }) => {
  const [search, setSearch] = useState("");

  const filterProducts = useMemo(() => {
    console.log("filtered");
    return womensData.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, womensData]);

  console.log("app render");

  return (
    <div className="container">
      <h1>Shop</h1>
      <input
        type="text"
        placeholder="Поиск по наименованию"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Cards cardsInfo={filterProducts} addToCart={addToCart} cart={cart} />
    </div>
  );
};

export default Shop;
