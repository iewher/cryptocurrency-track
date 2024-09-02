"use client";

import { FiLink, FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import { useState, useEffect } from "react";
import { DataProps } from "@/lib";
import styles from "./index.module.scss";

// Таблица с данными.
export default function Table() {
  const [data, setData] = useState<DataProps[] | undefined>(undefined);

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
    <div className={styles.Table}>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>1h</th>
            <th>24h</th>
            <th>Encryption</th>
            <th>Start date</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((c, index) => (
            <tr>
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
                <FiLink />
              </td>
              <td>
                {c.DISPLAY && c.DISPLAY.USD && c.DISPLAY.USD.PRICE !== ""
                  ? c.DISPLAY.USD.PRICE
                  : "-"}{" "}
              </td>
              <td>
                {c.RAW && c.RAW.USD && (
                  <p
                    style={{
                      color:
                        c.RAW.USD.CHANGEPCTHOUR >= 0 ? "#00BC00" : "#EE204D",
                    }}
                  >
                    {c.RAW.USD.CHANGEPCTHOUR.toFixed(2)} %
                  </p>
                )}
              </td>
              <td>
                {c.RAW && c.RAW.USD && (
                  <p
                    style={{
                      color:
                        c.RAW.USD.CHANGEPCTDAY >= 0 ? "#00BC00" : "#EE204D",
                    }}
                  >
                    {c.RAW.USD.CHANGEPCTDAY.toFixed(2)} %
                  </p>
                )}
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
