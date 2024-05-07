"use client";

import { useState, useEffect } from "react";

import Loading from "../loading";
import styles from "./index.module.scss";

interface Data {
  Data: {
    CoinInfo: {
      Algorithm: string;
      FullName: string;
      Internal: string;
      AssetLaunchDate: string;
      ImageUrl: string;
      Url: string;
    };
    RAW: {
      USD: {
        PRICE: string;
        CHANGEPCTHOUR: number;
        CHANGEPCTDAY: number;
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

  if (!data) return <Loading />;

  return (
    <div className={styles.Table}>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Название</th>
            <th>Цена</th>
            <th>1ч</th>
            <th>24ч</th>
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

export default Table;
