import Search from "../search";
import styles from "./index.module.scss";

function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.Logo}>
        <p>Cryptocurrency track</p>
      </div>
      <Search />
      <div className={styles.Nav}>
        <a href="/">Главная</a>
        <a href="/table/100">Топ-100</a>
        <a href="/table/check">Отслеживаемое</a>
      </div>
    </div>
  );
}

export default Header;
