import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/body-style.css';

const API_URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull';
const INTERVAL_TIME = 1000;

export default function Body() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, INTERVAL_TIME);
    return () => clearInterval(interval);
  }, []);

  const fetchData = () => {
    axios.get(API_URL, {
      params: {
        limit: 100,
        tsym: 'USD'
      }
    })
    .then(response => {
      const data = response.data.Data;
      setData(data);
    })
    .catch(error => {
      console.error(error);
    });
  };

  const renderTable = () => {
    return (
  <div style={{ height: "550px", overflowY: "scroll" }}>
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price</th>
          <th>Change (24h)</th>
          <th>Market Cap</th>
        </tr>
      </thead>
      <tbody>
        {data.map((coin, index) => (
          <tr key={coin.CoinInfo.Id}>
            <td>{index + 1}</td>
            <td>{coin.CoinInfo.FullName}</td>
            <td>{coin.CoinInfo.Name}</td>
            <td>{coin.DISPLAY && coin.DISPLAY.USD && coin.DISPLAY.USD.PRICE}</td>
            <td>{coin.DISPLAY && coin.DISPLAY.USD && coin.DISPLAY.USD.CHANGEPCT24HOUR}%</td>
            <td>{coin.DISPLAY && coin.DISPLAY.USD && coin.DISPLAY.USD.MKTCAP}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
    );
  };

  return (
    <div className='Body'>
      <div className='body-header'>Топ-100 криптовалют</div>
      <div className='table'>
      {data.length > 0 ? renderTable() : <p>Loading...</p>}
      </div>
    </div>
  );
}