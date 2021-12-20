import styles from "./Header.module.scss";

import frFlag from "../../../assets/images/France.png";
// import enFlag from "../../../assets/images/Angleterre.png";
// import esFlag from "../../../assets/images/Espagne.png";

import { ReactComponent as Arrow } from "../../../assets/icons/arrow.svg";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      
      <header className={styles.header}>
        <div className={styles.logo}>MyTravelBuddy</div>

        <div className={styles.rightHeader}>
          <span className={styles.donate}>Faire un don</span>
          <div className={styles.countriesSelection}>
            <div className={styles.lang}>
              <img className={styles.flag} src={frFlag} />
              <span>FR</span>
              <Arrow />
            </div>
          </div>

          <label htmlFor="showNav" className={styles.hamburger}>
            <div className={styles.hamburgerLine}></div>
            <div className={styles.hamburgerLine}></div>
            <div className={styles.hamburgerLine}></div>
          </label>
        </div>
      </header>
      <input type="checkbox" id="showNav" className={styles.navHeaderInput} />
      <div className={styles.navHeader}>NAV</div>
    </div>
  );
};

export default Header;
