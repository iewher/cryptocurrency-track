import { FaGithub, FaTelegram } from "react-icons/fa";
import Link from "../link";
import styles from "./index.module.scss";

function Footer() {
  return (
    <div className={styles.Footer}>
      <p>
        © 2023 - {new Date().getFullYear()} Cryptocurrency track. All rights
        reserved
      </p>
      <div className={styles.Links}>
        <Link
          icon={<FaGithub />}
          href="https://github.com/iewher/cryptocurrency-track"
          target
        >
          Github
        </Link>
        <Link icon={<FaTelegram />} href="https://t.me/iewher" target>
          Telegram
        </Link>
      </div>
    </div>
  );
}

export default Footer;
