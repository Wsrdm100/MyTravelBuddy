import styles from "./Searchbar.module.scss";
import {ReactComponent as Plus} from '../../../assets/icons/loupe.svg';

const Searchbar = () => {

  return (
   <form id="form"className={styles.searchBar} role="search">
      <input type="search" className={styles.input} id="query" name="q"
   placeholder="Rechercher..."
   aria-label="Search through site content"/>
    <button className={styles.button}><Plus/></button>
  </form>
)
}
export default Searchbar;
  