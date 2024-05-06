import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Rights}>
        <p>© 2023 Cryptocurrency track. All rights reserved</p>
      </div>
      <div className={styles.Links}>
        <a href="https://github.com/iewher/cryptocurrency-track">Github</a>
        <a href="https://t.me/iewher">Telegram</a>
      </div>
    </div>
  );
};

export default Footer;
