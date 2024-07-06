"use client";

import { useState, useEffect } from "react";
import { FiEye } from "react-icons/fi";

import H1 from "@/components/headings";
import Table from "@/components/table";
import { DataProps } from "@/lib";
import styles from "./page.module.scss";

type Tabs = "top" | "check";

function TablesPage() {
  const [data, setData] = useState<DataProps[] | undefined>(undefined);
  const [checkData, setCheckData] = useState<DataProps[] | undefined>([]);
  const [activeTab, setActiveTab] = useState<Tabs>("top");

  // Загрузить данные для таблицы.
  useEffect(() => {
    fetch(
      "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD",
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.Data.map((i: DataProps) => i));
      });
  }, []);

  return (
    <div className={styles.Page}>
      <H1 icon={<FiEye />}>Таблицы</H1>

      <div className={styles.Container}>
        <div className={styles.Tabs}>
          <div
            className={activeTab === "top" ? styles.ActiveTab : styles.Tab}
            onClick={() => setActiveTab("top")}
          >
            Топ 100
          </div>
          <div
            className={activeTab === "check" ? styles.ActiveTab : styles.Tab}
            onClick={() => setActiveTab("check")}
          >
            Отслеживаемое
          </div>
        </div>
        {activeTab === "top" && (
          <Table
            data={data}
            selectedList={checkData?.map((i) => i.CoinInfo.FullName)}
            onClick={(coin: DataProps) => {
              const selectedList = checkData?.map((i) => i.CoinInfo.FullName);

              // Монета уже добавлена, при нажатии убрать ее из списка.
              if (selectedList?.includes(coin.CoinInfo.FullName)) {
                setCheckData(
                  checkData?.filter(
                    (i) => i.CoinInfo.FullName !== coin.CoinInfo.FullName,
                  ),
                );
                return;
              }

              // Монета не добавлена, при нажатии добавить ее в список.
              setCheckData([...(checkData ?? []), coin]);
            }}
          />
        )}
        {activeTab === "check" && <Table data={checkData} isCheck />}
      </div>
    </div>
  );
}

export default TablesPage;
