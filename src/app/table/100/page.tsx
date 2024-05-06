import { FiTable } from "react-icons/fi";
import Table from "@/components/table";
import H1 from "@/components/headings";

import styles from "./index.module.scss";

function Page() {
  return (
    <div className={styles.Page}>
      <H1 icon={<FiTable />}>Топ 100</H1>
      <Table />
    </div>
  );
}

export default Page;
