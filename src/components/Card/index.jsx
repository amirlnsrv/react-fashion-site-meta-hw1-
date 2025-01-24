import React from "react";
import styles from "./Card.module.css";

export const Card = ({ imgLink, title, oldprice, price }) => {
  return (
    <div className={styles.card}>
      <img src={imgLink} alt={title} />
      <p className={styles.cardSuptitle}>IGURE</p>
      <p className={styles.cardTitle}>{title}</p>
      <p className={styles.cardPrice}>
        <span>{oldprice}</span> {price}
      </p>
    </div>
  );
};
