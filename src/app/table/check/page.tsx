import { FiEye } from "react-icons/fi";
import H1 from "@/components/headings";

import styles from "./index.module.scss";

function Page() {
  return (
    <div className={styles.Page}>
      <H1 icon={<FiEye />}>Отслеживаемое</H1>
    </div>
  );
}

export default Page;
