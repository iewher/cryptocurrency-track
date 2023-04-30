import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style/top-100-style.css';
import Header from '../../../components/Header/Header'
import Bottom from '../../../components/Bottom/Bottom'

const API_URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull';
const INTERVAL_TIME = 1000;
const LOCAL_STORAGE_KEY = 'cryptoData';

export default function Top100() {
  const [data, setData] = useState([]);
  const [selectedCoins, setSelectedCoins] = useState([]);

  useEffect(() => {
    const dataFromStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (dataFromStorage) {
      setData(JSON.parse(dataFromStorage));
    } else {
      fetchData();
    }
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
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    })
    .catch(error => {
      console.error(error);
    });
  };

  const handleCoinSelect = (coin) => {
    const isSelected = selectedCoins.includes(coin);
    setSelectedCoins(isSelected
      ? selectedCoins.filter(selectedCoin => selectedCoin !== coin)
      : [...selectedCoins, coin]
    );
  };

  const renderTable = () => {
    return (
      <div className='scrollable'>
        <table>
          <thead>
            <tr>
              <th>Check</th>
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
              <td>
                <input
                  type="radio"
                  checked={selectedCoins.includes(coin)}
                  onChange={() => handleCoinSelect(coin)}
                  className='checkbox-coin'
                />
              </td>
              <td>{index + 1}</td>
              <td>
                  <img src={`https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`} alt={coin.CoinInfo.FullName} className='image-tokens'/>
                  {coin.CoinInfo.FullName}
                </td>
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
    <div className='block'>
      <Header />
      <div className='Body'>
        <div className='body-header'>Топ-100 криптовалют</div>
        <div className='table'>
          {data.length > 0 ? renderTable() : <p className='loading'>Loading...</p>}
        </div>
      </div>
      <Bottom />
    </div>
  );
}
