import styles from "./index.module.scss";

interface InfoBlockProps {
  title: string;
  description: string;
  img: React.ReactNode;
}

export default function InfoBlock({ title, description, img }: InfoBlockProps) {
  return (
    <div className={styles.InfoBlock}>
      <div className={styles.Img}>{img}</div>
      <div className={styles.Content}>
        <p className={styles.Title}>{title}</p>
        <p className={styles.Description}>{description}</p>
      </div>
    </div>
  );
}
