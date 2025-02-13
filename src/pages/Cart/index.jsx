import styles from "./Cart.module.css";

const Cart = ({ cart }) => {
  return (
    <div className={styles.cart}>
      {cart.map((cartItem) => (
        <div className={styles.cartItem}>
          <img src={cartItem.imgLink} alt={cartItem.title} />
          <p>{cartItem.title}</p>
          <p>{cartItem.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
