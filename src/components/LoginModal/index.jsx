import styles from "./LoginModal.module.scss";
import Timer from "../Timer";

const LoginModal = ({ onClose }) => {
  return (
    <section className={styles.form_login}>
      <h3 className={styles.form_title}>Login form</h3>
      <button onClick={onClose} className={styles.formClose}>
        x
      </button>
      <section className={styles.form_content}>
        <input placeholder="Логин" autoComplete="off" />
        <br />
        <input placeholder="Пароль" autoComplete="off" />
        <button className={styles.btn_login}>Login</button>
      </section>
      <Timer />
    </section>
  );
};

export default LoginModal;
