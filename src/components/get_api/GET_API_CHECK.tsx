import { useState, useEffect } from "react";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { ClockLoader } from "react-spinners";
import { Coin } from "./types";
import "../../scss/get_api/get_api.scss";

const GET_SELECTION_COIN = () => {
  const [storedCoins, setStoredCoins] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("myObjects");
    if (storedData) {
      setStoredCoins(JSON.parse(storedData));
    }
  }, []);

  const renderTable = () => {
    return (
      <div className="scrollable">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Price</th>
              <th>1h %</th>
              <th>24h %</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {storedCoins.map((coin: Coin, index) => (
              <tr key={coin.CoinInfo.Id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={`https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`}
                    alt={coin.CoinInfo.FullName}
                    className="image-tokens"
                  />
                  {coin.CoinInfo.FullName} |{" "}
                  <span className="gray-text">{coin.CoinInfo.Name}</span>
                </td>
                <td>{coin.DISPLAY.USD.PRICE}</td>
                <td
                  style={{
                    color:
                      coin.DISPLAY.USD.CHANGEPCTHOUR >= "0"
                        ? "#00FA9A"
                        : "#DC143C",
                  }}
                >
                  {coin.DISPLAY.USD.CHANGEPCTHOUR}%
                  {coin.DISPLAY.USD.CHANGEPCTHOUR >= "0" ? (
                    <MdArrowDropUp />
                  ) : (
                    <MdArrowDropDown />
                  )}
                </td>
                <td
                  style={{
                    color:
                      coin.DISPLAY.USD.CHANGEPCT24HOUR >= "0"
                        ? "#00FA9A"
                        : "#DC143C",
                  }}
                >
                  {coin.DISPLAY.USD.CHANGEPCT24HOUR}%
                  {coin.DISPLAY.USD.CHANGEPCT24HOUR >= "0" ? (
                    <MdArrowDropUp />
                  ) : (
                    <MdArrowDropDown />
                  )}
                </td>
                <td>{coin.DISPLAY.USD.MKTCAP}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  if (!storedCoins)
    return (
      <div className="loading">
        <p>
          На данный момент вы не выбрали криптовалют, которые хотите отслеживать
        </p>
        <ClockLoader />
        <p>Ожидаем выбора</p>
      </div>
    );

  return renderTable();
};

export default GET_SELECTION_COIN;
