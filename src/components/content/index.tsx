"use client";

import { FiGithub, FiLayers, FiHeart } from "react-icons/fi";
import Table from "../table";
import Header from "../header";
import InfoBlock from "../info-block";
import styles from "./index.module.scss";

export default function Content() {
  return (
    <div className={styles.Content}>
      <Header />

      <div className={styles.Info}>
        <InfoBlock title="Count" description="100" img={<FiLayers />} />
        <InfoBlock
          title="Design"
          description="Simple and beautiful"
          img={<FiHeart />}
        />
        <InfoBlock
          title="Github"
          description="Follow me on github"
          img={<FiGithub />}
        />
      </div>

      <Table />
    </div>
  );
}
