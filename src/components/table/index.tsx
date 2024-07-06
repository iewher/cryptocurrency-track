"use client";

import Loading from "../loading";
import { DataProps } from "@/lib";
import styles from "./index.module.scss";
import { useState } from "react";

function Coin({
  c,
  index,
  isCheck,
  onClick,
  isSelected,
}: {
  c: DataProps;
  onClick: (coin: DataProps) => void;
  isCheck: boolean;
  index: number;
  isSelected: boolean;
}) {
  const [isChecked, setIsChecked] = useState(isSelected ? true : false);
  return (
    <tr>
      {!isCheck && (
        <td className={styles.Checkbox}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => {
              onClick && onClick(c);
              setIsChecked(isSelected ? false : true);
            }}
          />
        </td>
      )}
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
              color: c.RAW.USD.CHANGEPCTHOUR >= 0 ? "#00BC00" : "#EE204D",
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
              color: c.RAW.USD.CHANGEPCTDAY >= 0 ? "#00BC00" : "#EE204D",
            }}
          >
            {c.RAW.USD.CHANGEPCTDAY.toFixed(2)} %
          </p>
        )}
      </td>
      <td>{c.CoinInfo.Algorithm !== "N/A" ? c.CoinInfo.Algorithm : "-"}</td>
      <td>{c.CoinInfo.AssetLaunchDate}</td>
    </tr>
  );
}

export default function Table({
  data,
  isCheck,
  onClick,
  selectedList,
}: {
  data: DataProps[] | undefined;
  isCheck?: boolean;
  onClick?: (coin: DataProps) => void;
  selectedList?: string[];
}) {
  if (!data) return <Loading />;

  if (data.length < 1) {
    return <div>Нет данных.</div>;
  }

  return (
    <div className={styles.Table}>
      <table>
        <thead>
          <tr>
            {!isCheck && <th>Отсл.</th>}
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
          {data?.map((c, index) => (
            <Coin
              c={c}
              key={index}
              index={index}
              onClick={() => onClick && onClick(c)}
              isCheck={isCheck ?? false}
              isSelected={
                selectedList?.includes(c.CoinInfo.FullName) ? true : false
              }
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
