"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import styles from "./index.module.scss";

interface Data {
  Data: {
    CoinInfo: {
      Algorithm: string;
      FullName: string;
      AssetLaunchDate: string;
      ImageUrl: string;
      Url: string;
    };
    RAW: {
      USD: {
        PRICE: string;
      };
    };
    DISPLAY: {
      USD: {
        PRICE: string;
        IMAGEURL: string;
      };
    };
  }[];
}

function Table() {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    fetch(
      "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD",
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return <div>Загрузка...</div>;

  return (
    <div className={styles.Table}>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Название</th>
            <th>Цена</th>
            <th>Алгоритм</th>
            <th>Запуск</th>
          </tr>
        </thead>

        <tbody>
          {data?.Data.map((c, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className={styles.Title}>
                <img
                  src={`https://www.cryptocompare.com${c.CoinInfo.ImageUrl}`}
                  alt={c.CoinInfo.FullName}
                />
                <a
                  href={`https://www.cryptocompare.com${c.CoinInfo.Url}`}
                  target="_blank"
                >
                  {c.CoinInfo.FullName}
                </a>
              </td>
              <td>
                {c.DISPLAY && c.DISPLAY.USD && c.DISPLAY.USD.PRICE !== ""
                  ? c.DISPLAY.USD.PRICE
                  : "-"}{" "}
              </td>
              <td>
                {c.CoinInfo.Algorithm !== "N/A" ? c.CoinInfo.Algorithm : "-"}
              </td>
              <td>{c.CoinInfo.AssetLaunchDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
