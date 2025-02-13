import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Order = () => {
  const [product, setProduct] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setProduct(location.state);
  }, [product]);

  return (
    <div>
      <button onClick={() => navigate(-1)}>Вернуться назад</button>
      <h1>Страница заказа</h1>
      <div>
        <img src={product.imgLink} alt="product" width={200} />
        <h3>{product.title}</h3>
        <p>цена: {product.price} сом.</p>
      </div>

      <form>
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

export default Order;
