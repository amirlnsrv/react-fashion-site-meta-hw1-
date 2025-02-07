import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { womensData } from "../mock/womensData.mock";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    if (id) {
      const product = womensData.find((item) => item.id === Number(id));
      if (product) setCurrentProduct(product);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addToOrder = () => {
    navigate("/cart", { state: currentProduct });
  };

  return (
    <main>
      <div className="container">
        <button onClick={() => navigate(-1)}>Вернуться назад</button>
        <h1>страница конкретного продукта</h1>
        <h3>{currentProduct.title}</h3>
        <p>цена: {currentProduct.price} сом.</p>
        <img src={currentProduct.imgLink} alt="product-image" width={500} />
        <button onClick={addToOrder}>Оформить заказ</button>
      </div>
    </main>
  );
};

export default ProductDetail;
