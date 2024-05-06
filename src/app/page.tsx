import { FiHome } from "react-icons/fi";
import H1 from "@/components/headings";

import styles from "./page.module.scss";

export default function Page() {
  return (
    <div className={styles.Page}>
      <H1 icon={<FiHome />}>Главная</H1>
    </div>
  );
}
