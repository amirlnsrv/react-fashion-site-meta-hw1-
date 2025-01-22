import React from "react";
import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className="container">
        <div className={styles.introInner}>
          <div className={styles.introText}>
            <p className={styles.introSuptitle}>NEW TREND</p>
            <h1 className={styles.introTitle}>COLLUSION</h1>
            <p className={styles.introSubTitle}>
              An exclusive selection of this season's trends.
            </p>
          </div>
          <div className={styles.introBtns}>
            <button>DISCOVER</button>
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
