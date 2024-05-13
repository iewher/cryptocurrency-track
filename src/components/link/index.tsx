import styles from "./index.module.scss";

interface LinkProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  href: string;
  target?: boolean;
}

function Link({ children, target, icon, href }: LinkProps) {
  return (
    <div className={styles.Link}>
      {icon}
      <a target={target ? "_blank" : "_self"} href={href}>
        {children}
      </a>
    </div>
  );
}

export default Link;
