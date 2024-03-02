import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { Line } from "react-chartjs-2";
import { CategoryScale, LinearScale, Chart, registerables } from "chart.js";
import { Input } from "antd";
import "../../scss/search/search.scss";

const API_URL_SEARCH = "https://api.coingecko.com/api/v3/coins";

const fetchData = (coin: any) => {
  return fetch(`${API_URL_SEARCH}/${coin}`)
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("coinObject", JSON.stringify(data));
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error(error.message);
    });
};

export const ShowSearch = () => {
  const [coin, setCoin] = useState("");

  const handleCoin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCoin(event.target.value);
  };

  const handleSubmit = () => {
    fetchData(coin);
  };

  return (
    <div className="search">
      <Input type="text" placeholder="Выберите монету" onChange={handleCoin} />
      <Link to="/coin">
        <button onClick={handleSubmit}>Найти</button>
      </Link>
    </div>
  );
};

Chart.register(CategoryScale, LinearScale, ...registerables);

export const ChartComponent_1day = () => {
  const [chartData, setChartData] = useState<any>({});

  const storedData = localStorage.getItem("coinObject");
  const coin_id: any = storedData !== null ? JSON.parse(storedData) : "";

  useEffect(() => {
    if (coin_id) {
      fetch(
        `https://api.coingecko.com/api/v3/coins/${coin_id.id}/market_chart?vs_currency=usd&days=1`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.prices && data.prices.length > 0) {
            const prices = data.prices.map((price: Array<number>) => price[1]);
            const limitedPrices = prices.slice(0, 24);
            const labels = Array.from(Array(24).keys()).map((index) => {
              const hour = index.toString().padStart(2, "0");
              return `${hour}:00`;
            });

            setChartData({
              labels: labels,
              datasets: [
                {
                  label: `${coin_id.name} price in USD for 1 day`,
                  data: limitedPrices,
                  borderColor: "black",
                  fill: false,
                },
              ],
            });
          } else {
            console.error("Отсутствуют данные о ценах.");
          }
        })
        .catch((error) => {
          console.error("Ошибка при получении данных из API:", error);
        });
    }
  }, [coin_id]);

  return (
    <div className="coin-charts">
      {Object.keys(chartData).length > 0 ? (
        <Line data={chartData} />
      ) : (
        <p>Загрузка данных...</p>
      )}
    </div>
  );
};

export const ChartComponent_7day = () => {
  const [chartData, setChartData] = useState<any>({});

  const storedData = localStorage.getItem("coinObject");
  const coin_id: any = storedData !== null ? JSON.parse(storedData) : "";

  useEffect(() => {
    if (coin_id) {
      fetch(
        `https://api.coingecko.com/api/v3/coins/${coin_id.id}/market_chart?vs_currency=usd&days=7`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.prices && data.prices.length > 0) {
            const prices = data.prices.map((price: Array<number>) => price[1]);
            const limitedPrices = prices.slice(0, 7);
            const labels = Array.from(Array(7).keys()).map((index) => {
              const hour = index.toString().padStart(2, "0");
              return `${hour}:00`;
            });

            setChartData({
              labels: labels,
              datasets: [
                {
                  label: `${coin_id.name} price in USD for 7 day`,
                  data: limitedPrices,
                  borderColor: "black",
                  fill: false,
                },
              ],
            });
          } else {
            console.error("Отсутствуют данные о ценах.");
          }
        })
        .catch((error) => {
          console.error("Ошибка при получении данных из API:", error);
        });
    }
  }, [coin_id]);

  return (
    <div className="coin-charts">
      {Object.keys(chartData).length > 0 ? (
        <Line data={chartData} />
      ) : (
        <p>Загрузка данных...</p>
      )}
    </div>
  );
};

export const ChartComponent_30day = () => {
  const [chartData, setChartData] = useState<any>({});

  const storedData = localStorage.getItem("coinObject");
  const coin_id: any = storedData !== null ? JSON.parse(storedData) : "";

  useEffect(() => {
    if (coin_id) {
      fetch(
        `https://api.coingecko.com/api/v3/coins/${coin_id.id}/market_chart?vs_currency=usd&days=30`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.prices && data.prices.length > 0) {
            const prices: any = data.prices.map(
              (price: Array<number>) => price[1]
            );
            const limitedPrices = prices.slice(0, 30);
            const labels = Array.from(Array(30).keys()).map((index) => {
              const hour = index.toString().padStart(2, "0");
              return `${hour}:00`;
            });

            setChartData({
              labels: labels,
              datasets: [
                {
                  label: `${coin_id.name} price in USD for 30 day`,
                  data: limitedPrices,
                  borderColor: "black",
                  fill: false,
                },
              ],
            });
          } else {
            console.error("Отсутствуют данные о ценах.");
          }
        })
        .catch((error) => {
          console.error("Ошибка при получении данных из API:", error);
        });
    }
  }, [coin_id]);

  return (
    <div className="coin-charts">
      {Object.keys(chartData).length > 0 ? (
        <Line data={chartData} />
      ) : (
        <p>Загрузка данных...</p>
      )}
    </div>
  );
};

export const ShowCoinInfo = () => {
  const storedData = localStorage.getItem("coinObject");
  const data: any = storedData !== null ? JSON.parse(storedData) : "";

  return (
    <div className="coin">
      <div className="coin-body">
        <div className="coin-name">
          {data.image && data.image.large && (
            <img src={`${data.image.large}`} alt={data.name} />
          )}
          <h2>
            {data.name} |{" "}
            <span
              className="coin-symbol"
              style={{ textTransform: "uppercase" }}
            >
              {data.symbol}
            </span>
          </h2>
        </div>
        <div className="coin-price">
          {data.market_data && data.market_data.current_price && (
            <p>Цена: {data.market_data.current_price.usd} $</p>
          )}
          <details>
            <summary>Изменения цены</summary>
            {[
              {
                interval: "1 час",
                dataKey: "price_change_percentage_1h_in_currency",
              },
              {
                interval: "1 день",
                dataKey: "price_change_percentage_24h_in_currency",
              },
              {
                interval: "7 дней",
                dataKey: "price_change_percentage_7d_in_currency",
              },
              {
                interval: "14 дней",
                dataKey: "price_change_percentage_14d_in_currency",
              },
              {
                interval: "30 дней",
                dataKey: "price_change_percentage_30d_in_currency",
              },
              {
                interval: "60 дней",
                dataKey: "price_change_percentage_60d_in_currency",
              },
              {
                interval: "1 год",
                dataKey: "price_change_percentage_1y_in_currency",
              },
            ].map(({ interval, dataKey }) => (
              <p key={interval}>
                {`${interval}: `}
                <span
                  style={{
                    color:
                      data.market_data[dataKey].usd >= 0
                        ? "#00FA9A"
                        : "#DC143C",
                  }}
                >
                  {data.market_data[dataKey].usd} %
                  {data.market_data[dataKey].usd >= 0 ? (
                    <MdArrowDropUp />
                  ) : (
                    <MdArrowDropDown />
                  )}
                </span>
              </p>
            ))}
          </details>
        </div>
        <div className="coin-details">
          <p>
            BSCSCAN:{" "}
            <a href={data.links.blockchain_site}>
              {data.links.blockchain_site}
            </a>
          </p>
          {(data.contract_address && (
            <p>Contract: {data.contract_address}</p>
          )) || (
            <p>Contract: извините, произошла ошибка с получением контракта</p>
          )}
        </div>
        <div>
          <details>
            <summary>Ссылки:</summary>
            {data.links && data.links.homepage && (
              <p className="coin-links">
                Сайт: <a href={data.links.homepage}>{data.links.homepage}</a>
              </p>
            )}
            {data.links && data.links.official_forum_url && (
              <p className="coin-links">
                Документация:{" "}
                <a href={data.links.official_forum_url}>
                  {data.links.official_forum_url}
                </a>
              </p>
            )}
            {data.links &&
              data.links.repos_url &&
              data.links.repos_url.github &&
              data.links.repos_url.github[0] && (
                <p className="coin-links">
                  GitHub:{" "}
                  <a href={data.links.repos_url.github[0]}>
                    {data.links.repos_url.github[0]}
                  </a>
                </p>
              )}
          </details>
        </div>
        <ChartComponent_1day />
        <ChartComponent_7day />
        <ChartComponent_30day />
      </div>
    </div>
  );
};
