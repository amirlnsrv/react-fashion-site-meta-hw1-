import React from "react";

import styles from "./Cards.module.css";

import { Card } from "../Card";

const Cards = ({ cardsInfo, cart, addToCart }) => {
  return (
    <div className={styles.cards}>
      {cardsInfo.map((cardInfo, idx) => (
        <Card
          key={cardInfo.id}
          id={cardInfo.id}
          imgLink={cardInfo.imgLink}
          title={cardInfo.title}
          oldprice={cardInfo.oldprice}
          price={cardInfo.price}
          cart={cart}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default Cards;
