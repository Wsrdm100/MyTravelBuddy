import styles from "./Header.module.scss";
import enFlag from "../../../assets/images/Angleterre.png";
import esFlag from "../../../assets/images/Espagne.png";
import frFlag from "../../../assets/images/France.png";

import { ReactComponent as Arrow } from "../../../assets/icons/arrow.svg";

import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [langChecked, setLangChecked] = useState(false);
  const [navChecked, setNavChecked] = useState(false);

  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <div className={styles.logo}>MyTravelBuddy</div>

        <div className={styles.rightHeader}>
          <span className={styles.donate}>Faire un don</span>
          <label
            htmlFor="showLanguage"
            className={styles.countriesSelection}
            onClick={() => setLangChecked(!langChecked)}
          >
            <div className={`${styles.lang} ${langChecked && styles.rotate}`}>
              <img className={styles.flag} src={frFlag} />
              <span>FR</span>
              <Arrow />
            </div>
          </label>

          <label
            htmlFor="showNav"
            className={styles.ok}
            onClick={() => setNavChecked(!navChecked)}
          >
            <div
              className={`${styles.hamburger} ${navChecked && styles.change}`}
            >
              <div className={styles.hamburgerLine}></div>
              <div className={styles.hamburgerLine}></div>
              <div className={styles.hamburgerLine}></div>
            </div>
          </label>
        </div>
      </header>
      <input
        type="checkbox"
        id="showLanguage"
        className={styles.LanguagesInput}
      />
      <div className={styles.Languages}>
        <div className={styles.choiceLanguage}>
          <img className={styles.flag} src={frFlag} />
          <span>FR</span>
        </div>
        <div className={styles.choiceLanguage}>
          <img className={styles.flag} src={enFlag} />
          <span>EN</span>
        </div>
        <div className={styles.choiceLanguage}>
          <img className={styles.flag} src={esFlag} />
          <span>ES</span>
        </div>
      </div>

      <input type="checkbox" id="showNav" className={styles.navHeaderInput} />
      <div className={styles.navHeader}>
        <ul className={styles.menu}>
          <li>
            <Link className="primary-btn full-width" to="/auth/login">
              S'identifier
            </Link>
          </li>

          <li>
            <a href="contacter">Contacter</a>
          </li>
          <li>
            <a href="espace_professionnel">Espace professionnel</a>
          </li>
          <li>
            <a href="mentions_légales">Mentions légales</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
