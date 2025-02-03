import React from "react";

import styles from "./Cards.module.css";

import { Card } from "../Card";

const Cards = ({ cardsInfo }) => {
  return (
    <div className={styles.cards}>
      {cardsInfo.map((cardInfo, idx) => (
        <Card
          key={idx}
          id={cardInfo.id}
          imgLink={cardInfo.imgLink}
          title={cardInfo.title}
          oldprice={cardInfo.oldprice}
          price={cardInfo.price}
        />
      ))}
    </div>
  );
};

export default Cards;
