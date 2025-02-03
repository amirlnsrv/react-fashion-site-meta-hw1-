import React from "react";
import styles from "./Womens.module.css";

import Cards from "../Cards";
import { womensData } from "../../mock/womensData.mock";

const Womens = () => {
  return (
    <div className={styles.womensfashion}>
      <p className={styles.womensfashionTitle}>WOMEN’S FASHION</p>
      <p className={styles.womensfashionSubtitle}>
        Shop our new arrivals from established brands
      </p>
      <div className="container">
        <Cards cardsInfo={womensData} />
      </div>
    </div>
  );
};

export default Womens;
