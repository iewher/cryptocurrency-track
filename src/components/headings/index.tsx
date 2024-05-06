import styles from "./index.module.scss";

interface HeadingProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export default function H1({ icon, children }: HeadingProps) {
  return (
    <div className={styles.H1}>
      {icon}
      <h1>{children}</h1>
    </div>
  );
}
