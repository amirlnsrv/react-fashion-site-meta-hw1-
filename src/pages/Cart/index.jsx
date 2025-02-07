import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import styles from "./Cart.module.css";

const Cart = () => {
  const [product, setProduct] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state !== null) {
      setProduct(location.state);
    }
  }, [product]);

  if (location.state === null) {
    return <h1>Корзина пуста</h1>;
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>Вернуться назад</button>
      <h1>Корзина</h1>
      <div>
        <img src={product.imgLink} alt="product" width={200} />
        <h3>{product.title}</h3>
        <p>цена: {product.price} сом.</p>
      </div>

      <form className={styles.form}>
        <input type="text" placeholder="Адрес" />
        <button
          onClick={(e) => {
            e.preventDefault();
            alert("Ваш товар уже в пути");
          }}
        >
          Оформить доставку
        </button>
      </form>
    </div>
  );
};

export default Cart;
