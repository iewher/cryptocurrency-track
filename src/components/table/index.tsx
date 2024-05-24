import { FiEye } from "react-icons/fi";

import Loading from "../loading";
import styles from "./index.module.scss";

export interface CoinProps {
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

interface TableProps {
  data?: CoinProps;
  checkedCoin?: CoinProps;
  setCheckedCoin?: (checkedCoin: CoinProps) => void;
}

function Table({ data, setCheckedCoin }: TableProps) {
  if (!data) return <Loading />;

  return (
    <div className={styles.Table}>
      <table>
        <thead>
          <tr>
            <th>
              <FiEye />
            </th>
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
          {data?.Data.map((coin, index) => (
            <tr key={index}>
              <td>
                <button
                  onClick={() =>
                    setCheckedCoin &&
                    setCheckedCoin({
                      Data: [
                        {
                          CoinInfo: coin.CoinInfo,
                          RAW: coin.RAW,
                          DISPLAY: coin.DISPLAY,
                        },
                      ],
                    })
                  }
                >
                  +
                </button>
              </td>
              <td>{index + 1}</td>
              <td className={styles.Title}>
                <img
                  src={`https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`}
                  alt={coin.CoinInfo.FullName}
                />
                <a
                  href={`https://www.cryptocompare.com${coin.CoinInfo.Url}`}
                  target="_blank"
                >
                  {coin.CoinInfo.FullName}
                </a>
              </td>
              <td>
                {coin.DISPLAY &&
                coin.DISPLAY.USD &&
                coin.DISPLAY.USD.PRICE !== ""
                  ? coin.DISPLAY.USD.PRICE
                  : "-"}{" "}
              </td>
              <td>
                {coin.RAW && coin.RAW.USD && (
                  <p
                    style={{
                      color:
                        coin.RAW.USD.CHANGEPCTHOUR >= 0 ? "#00BC00" : "#EE204D",
                    }}
                  >
                    {coin.RAW.USD.CHANGEPCTHOUR.toFixed(2)} %
                  </p>
                )}
              </td>
              <td>
                {coin.RAW && coin.RAW.USD && (
                  <p
                    style={{
                      color:
                        coin.RAW.USD.CHANGEPCTDAY >= 0 ? "#00BC00" : "#EE204D",
                    }}
                  >
                    {coin.RAW.USD.CHANGEPCTDAY.toFixed(2)} %
                  </p>
                )}
              </td>
              <td>
                {coin.CoinInfo.Algorithm !== "N/A"
                  ? coin.CoinInfo.Algorithm
                  : "-"}
              </td>
              <td>{coin.CoinInfo.AssetLaunchDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
