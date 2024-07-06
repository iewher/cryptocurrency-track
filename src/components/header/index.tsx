import { FiEye, FiHome, FiTrendingUp } from "react-icons/fi";

import Search from "../search";
import Link from "../link";
import styles from "./index.module.scss";

function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.Logo}>
        <p>Cryptocurrency track</p>
      </div>
      <Search />
      <div className={styles.Nav}>
        <Link href="/" icon={<FiHome />}>
          Главная
        </Link>
        <Link href="/tables" icon={<FiTrendingUp />}>
          Таблицы
        </Link>
      </div>
    </header>
  );
}

export default Header;
