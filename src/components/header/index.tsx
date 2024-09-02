import { FiSearch } from "react-icons/fi";
import styles from "./index.module.scss";

function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.Hello}>Table</div>
      <div className={styles.Search}>
        <FiSearch />
        <input placeholder="Search..." />
      </div>
    </header>
  );
}

export default Header;
