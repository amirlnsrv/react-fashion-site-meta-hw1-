import React from "react";
import styles from "./Womens.module.css";

import { Card } from "../Card";

import wf1 from "../../images/wf1.jpg";
import wf2 from "../../images/wf2.jpg";
import wf3 from "../../images/wf3.jpg";
import wf4 from "../../images/wf4.jpg";

const Womens = () => {
  return (
    <div className={styles.womensfashion}>
      <p className={styles.womensfashionTitle}>WOMEN’S FASHION</p>
      <p className={styles.womensfashionSubtitle}>
        Shop our new arrivals from established brands
      </p>
      <div className="container">
        <div className={styles.cards}>
          <Card
            imgLink={wf1}
            title="GREEN MUSCLE FIT POLO SHIRT"
            oldprice="$229.00"
            price="$129.00"
          />
          <Card
            imgLink={wf2}
            title="GREEN MUSCLE FIT POLO SHIRT"
            oldprice="$229.00"
            price="$129.00"
          />
          <Card
            imgLink={wf3}
            title="GREEN MUSCLE FIT POLO SHIRT"
            oldprice="$229.00"
            price="$129.00"
          />
          <Card
            imgLink={wf4}
            title="GREEN MUSCLE FIT POLO SHIRT"
            oldprice="$229.00"
            price="$129.00"
          />
        </div>
      </div>
    </div>
  );
};

export default Womens;
