import React, { useState, useEffect, useMemo } from 'react';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md'
import axios from 'axios';
import './style/top-100-style.css';
import Header from '../../../components/Header/Header'
import Bottom from '../../../components/Bottom/Bottom'


export const API_URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull';
export const INTERVAL_TIME = 1000;
export const LOCAL_STORAGE_KEY = 'cryptoData';

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

  /*
  Все что написано ниже, я просто в рот ебал
  */

  const selectedCoinIds = useMemo(() => {
    return selectedCoins.map((coin) => coin.CoinInfo.Id);
  }, [selectedCoins]);

  const handleCheckboxChange = (coin) => {
    const coinIndex = selectedCoins.findIndex(
      (selectedCoin) => selectedCoin.CoinInfo.Id === coin.CoinInfo.Id
    );
    if (coinIndex === -1) {
      setSelectedCoins([...selectedCoins, coin]);
    } else {
      setSelectedCoins([
        ...selectedCoins.slice(0, coinIndex),
        ...selectedCoins.slice(coinIndex + 1),
      ]);
    }
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
              <th>Change (1h)</th>
              <th>Change (24h)</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
          {data.map((coin, index) => (
            <tr key={coin.CoinInfo.Id}>
              <td>
              <input
                  type='checkbox'
                  className='checkbox-coin'
                  checked={selectedCoinIds.includes(coin.CoinInfo.Id)}
                  onChange={() => handleCheckboxChange(coin)}
                />
              </td>
              <td>{index + 1}</td>
              <td>
                  <img src={`https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`} alt={coin.CoinInfo.FullName} className='image-tokens'/>
                  {coin.CoinInfo.FullName}
                </td>
                <td>{coin.CoinInfo.Name}</td>
                <td>{coin.DISPLAY && coin.DISPLAY.USD && coin.DISPLAY.USD.PRICE}</td>
                <td style={{ color: coin.DISPLAY && coin.DISPLAY.USD && coin.DISPLAY.USD.CHANGEPCTHOUR >= 0 ? '#00FA9A' : '#DC143C' }}>
                {coin.DISPLAY && coin.DISPLAY.USD && coin.DISPLAY.USD.CHANGEPCTHOUR}% 
                {coin.DISPLAY && coin.DISPLAY.USD && coin.DISPLAY.USD.CHANGEPCTHOUR >= 0 ? <MdArrowDropUp /> : <MdArrowDropDown />}
              </td>
              <td style={{ color: coin.DISPLAY && coin.DISPLAY.USD && coin.DISPLAY.USD.CHANGEPCT24HOUR >= 0 ? '#00FA9A' : '#DC143C' }}>
                {coin.DISPLAY && coin.DISPLAY.USD && coin.DISPLAY.USD.CHANGEPCT24HOUR}% 
                {coin.DISPLAY && coin.DISPLAY.USD && coin.DISPLAY.USD.CHANGEPCT24HOUR >= 0 ? <MdArrowDropUp /> : <MdArrowDropDown />}
              </td>
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
