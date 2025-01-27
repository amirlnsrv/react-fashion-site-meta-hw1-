import React from "react";
import styles from "./Footer.module.css";

import locationIcon from "../../images/location.svg";
import socialIcon from "../../images/social.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <div className={styles.footerLeft}>
            <p className="headerLogo">YOUR LOGO</p>
            <p className={styles.footerText}>
              We earned a reputation of being good at what we do. Let us take
              your online shop to new dimension in success!
            </p>
            <div className={styles.footerLocation}>
              <img src={locationIcon} alt="location-icon" />
              <p>Comilla, Bangladesh 3500</p>
            </div>
            <div className={styles.footerContacts}>
              <p className={styles.footerEmail}>kawsarahmed0210@gmail.com</p>
              <p className={styles.footerTel}>01647470457</p>
            </div>
            <div className={styles.footerSocial}>
              <a href="#">
                <img src={socialIcon} alt="social-icon" />
              </a>
            </div>
          </div>

          <div className={styles.footerRight}>
            <p className="headerLogo">RECIVE EMAIL UPDATES</p>
            <div className={styles.footerInput}>
              <input type="email" placeholder="Your Email Address" />
              <button>Join</button>
            </div>
            <nav className={styles.footerNav}>
              <div className={styles.footerCol}>
                <div className={styles.footerColTitle}>SHOP</div>
                <ul>
                  <li className={styles.footerColLink}>
                    <a href="#">Shop</a>
                  </li>
                  <li className={styles.footerColLink}>
                    <a href="#">Collection</a>
                  </li>
                  <li className={styles.footerColLink}>
                    <a href="#">Outlet</a>
                  </li>
                  <li className={styles.footerColLink}>
                    <a href="#">Lookbook</a>
                  </li>
                </ul>
              </div>
              <div className={styles.footerCol}>
                <div className={styles.footerColTitle}>HELP</div>
                <ul>
                  <li className={styles.footerColLink}>
                    <a href="#">FAQ</a>
                  </li>
                  <li className={styles.footerColLink}>
                    <a href="#">Privecy Policy</a>
                  </li>
                  <li className={styles.footerColLink}>
                    <a href="#">Tearms and conditions</a>
                  </li>
                  <li className={styles.footerColLink}>
                    <a href="#">Return and Exchanges</a>
                  </li>
                </ul>
              </div>
              <div className={styles.footerCol}>
                <div className={styles.footerColTitle}>ABOUT</div>
                <ul>
                  <li className={styles.footerColLink}>
                    <a href="#">Our Story</a>
                  </li>
                  <li className={styles.footerColLink}>
                    <a href="#">Contact</a>
                  </li>
                  <li className={styles.footerColLink}>
                    <a href="#">Store Location</a>
                  </li>
                  <li className={styles.footerColLink}>
                    <a href="#">Journal</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
