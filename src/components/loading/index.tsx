import { FiLoader } from "react-icons/fi";

import styles from "./index.module.scss";

function Loading() {
  return (
    <div className={styles.Loading}>
      <FiLoader />
    </div>
  );
}

export default Loading;
