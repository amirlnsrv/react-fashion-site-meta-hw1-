import React, { useCallback } from "react";
import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";

export const Card = ({
  id,
  imgLink,
  title,
  price,
  oldprice,
  cart,
  addToCart,
}) => {
  const redirect = useNavigate();

  const [count, setCount] = React.useState(0);

  const decrement = () => setCount((prev) => prev - 1);

  const addProductToCart = useCallback(() => {
    addToCart(id, imgLink, title, price);
    setCount((prev) => prev + 1);
  }, [cart]);

  return (
    <div className={styles.card}>
      <div
        className={styles.cardBody}
        onClick={() => redirect(`/product/${id}`)}
      >
        <img src={imgLink} alt={title} />
        <p className={styles.cardSuptitle}>IGURE</p>
        <p className={styles.cardTitle}>{title}</p>
        <p className={styles.cardPrice}>
          <span>{oldprice}</span> {price}
        </p>
      </div>
      <div className={styles.cardFooter}>
        {count > 0 && (
          <button onClick={decrement} className={styles.btnToCart}>
            -
          </button>
        )}

        <p className={styles.cartCounter}>{count}</p>

        <button onClick={addProductToCart} className={styles.btnToCart}>
          +
        </button>
      </div>
    </div>
  );
};
