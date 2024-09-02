import { FiChevronRight } from "react-icons/fi";

import styles from "./index.module.scss";
import Link from "next/link";

interface NavButtonProps {
  title: string;
  icon: React.ReactNode;
  href?: string;
}

export default function NavButton({ icon, title, href }: NavButtonProps) {
  return (
    <Link href={href ?? "/"} className={styles.Link} target="_blank">
      <button className={styles.Button}>
        <div className={styles.Content}>
          {icon}
          {title}
        </div>
        <FiChevronRight />
      </button>
    </Link>
  );
}
