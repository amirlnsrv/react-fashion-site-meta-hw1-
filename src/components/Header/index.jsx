import { useState } from "react";
import searchIcon from "../../images/search.svg";
import favoriteIcon from "../../images/favorite.svg";
import cartIcon from "../../images/cart.svg";

import styles from "./Header.module.css";

import LoginModal from "../LoginModal";
import { NavLink } from "react-router-dom";

const routes = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Shop",
    path: "/shop",
  },
  {
    title: "Lookbook",
    path: "/lookbook",
  },
  {
    title: "Features",
    path: "/features",
  },
  {
    title: "Pages",
    path: "/pages",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <p className="headerLogo">YOUR LOGO</p>
          <nav className={styles.headerNav}>
            <ul>
              {routes.map((route, idx) => (
                <li className={styles.headerItem}>
                  <NavLink key={idx} to={route.path}>
                    {route.title}
                  </NavLink>
                </li>
              ))}
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
