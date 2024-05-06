import styles from "./index.module.scss";

function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.Logo}>
        <p>Cryptocurrency track</p>
      </div>
      <div className={styles.Nav}>
        <a href="/">Главная</a>
        <a href="/top-100">Топ-100</a>
        <a href="/check">Отслеживаемое</a>
      </div>
    </div>
  );
}

export default Header;
