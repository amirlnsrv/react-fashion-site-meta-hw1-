import React from "react";
import searchIcon from "../../images/search.svg";
import favoriteIcon from "../../images/favorite.svg";
import cartIcon from "../../images/cart.svg";

import styles from "./Header.module.css";

import LoginModal from "../LoginModal";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <p className="headerLogo">YOUR LOGO</p>
          <nav className={styles.headerNav}>
            <ul>
              <li className={styles.headerItem}>
                <a href="#">Home</a>
              </li>
              <li className={styles.headerItem}>
                <a href="#">Shop</a>
              </li>
              <li className={styles.headerItem}>
                <a href="#">Lookbook</a>
              </li>
              <li className={styles.headerItem}>
                <a href="#">Features</a>
              </li>
              <li className={styles.headerItem}>
                <a href="#">Pages</a>
              </li>
              <li className={styles.headerItem}>
                <a href="#">Blog</a>
              </li>
            </ul>
          </nav>
          <div className={styles.headerWidgets}>
            <div className={styles.headerWidget}>
              <img src={searchIcon} alt="search-icon" />
            </div>
            <div className={styles.headerWidget}>
              <img src={favoriteIcon} alt="favorite-icon" />
            </div>
            <div className={styles.headerWidget}>
              <img src={cartIcon} alt="cart-icon" />
            </div>
          </div>

          <button onClick={toggleMenu}>Войти</button>
          {isOpen && <LoginModal onClose={toggleMenu} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
