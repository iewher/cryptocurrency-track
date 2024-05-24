"use client";

import { useState, useEffect } from "react";

import H1 from "@/components/headings";
import Table, { CoinProps } from "@/components/table";
import styles from "./page.module.scss";

type Tab = "top100" | "check";

function Page() {
  const [activeTab, setActiveTab] = useState<Tab>("top100");
  const [data, setData] = useState<CoinProps>();
  const [checkedCoin, setCheckedCoin] = useState<CoinProps>();

  useEffect(() => {
    fetch(
      "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD",
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className={styles.Page}>
      <H1>Таблицы</H1>
      <div className={styles.Content}>
        <div className={styles.Tabs}>
          <p
            className={activeTab === "top100" ? styles.ActiveTab : styles.Tab}
            onClick={() => setActiveTab("top100")}
          >
            Топ 100
          </p>
          <p>/</p>
          <p
            className={activeTab === "check" ? styles.ActiveTab : styles.Tab}
            onClick={() => setActiveTab("check")}
          >
            Отслеживаемое
          </p>
        </div>
        {activeTab === "top100" && (
          <Table data={data} setCheckedCoin={setCheckedCoin} />
        )}
        {activeTab === "check" && (
          <Table data={checkedCoin} setCheckedCoin={setCheckedCoin} />
        )}
      </div>
    </div>
  );
}

export default Page;
