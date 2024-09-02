import Sidebar from "@/components/sidebar";
import Content from "@/components/content";
import styles from "./page.module.scss";

export default function Page() {
  return (
    <div className={styles.Page}>
      <Sidebar />
      <Content />
    </div>
  );
}
