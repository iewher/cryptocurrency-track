"use client";

import { useState, useEffect } from "react";

import styles from "./page.module.scss";

interface Data {
  Data: {
    CoinInfo: {
      Algorithm: string;
      FullName: string;
    };
    DISPLAY: {
      USD: {
        PRICE: string;
        IMAGEURL: string;
      };
    };
  }[];
}

// 59fb7cf2505dc790968d1176df65e9a69ff51352b7e1af18fe22f466978f6e35

export default function Page() {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    fetch(
      "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className={styles.Page}>
      <div className={styles.Table}>
        <table>
          <tr>
            <th>#</th>
            <th>Лого</th>
            <th>Название</th>
            <th>Цена</th>
            <th>Алгоритм</th>
          </tr>
        </table>
      </div>
    </div>
  );
}
