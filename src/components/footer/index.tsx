import styles from "./index.module.scss";

function Footer() {
  return (
    <div className={styles.Footer}>
      <p>© 2023 Cryptocurrency track. All rights reserved</p>
      <div className={styles.Links}>
        <a
          href="https://github.com/iewher/cryptocurrency-track"
          target="_blank"
        >
          Github
        </a>
        <a href="https://t.me/iewher" target="_blank">
          Telegram
        </a>
      </div>
    </div>
  );
}

export default Footer;
