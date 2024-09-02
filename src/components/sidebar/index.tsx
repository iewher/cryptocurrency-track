import { FiHome, FiGithub } from "react-icons/fi";
import NavButton from "../nav-button";
import styles from "./index.module.scss";

export default function Sidebar() {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.Logo}>
        Cryptocurrency <br /> track
      </div>
      <div className={styles.Nav}>
        <NavButton title="Home" icon={<FiHome />} />
        <NavButton
          title="Github"
          icon={<FiGithub />}
          href="https://github.com/iewher/cryptocurrency-track"
        />
      </div>
    </div>
  );
}
