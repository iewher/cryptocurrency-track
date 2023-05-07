import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './style/search-style.css'
import axios from 'axios';

export const API_URL = 'https://min-api.cryptocompare.com/data/pricemulti';
export const INTERVAL_TIME = 1000;
export const LOCAL_STORAGE_KEY = 'cryptoData';

export default function Search() {
  const [data, setData] = useState({});
  const [searchCoin, setSearchCoin] = useState('');
  const [intervalId, setIntervalId] = useState(null);

  const startInterval = () => {
    const id = setInterval(fetchData, INTERVAL_TIME);
    setIntervalId(id);
  };

  const stopInterval = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const fetchData = () => {
    const coin = searchCoin;
    const currency = 'USD';

    axios
      .get(API_URL, {
        params: {
          fsyms: coin,
          tsyms: currency,
        },
      })
      .then(response => {
        const data = response.data;
        setData(data);
        // console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleInputChange = event => {
    setSearchCoin(event.target.value);
    if (intervalId) {
      stopInterval();
    }
  };

  const handleSearch = () => {
    fetchData();
    if (!intervalId) {
      startInterval();
    }
  };

  return (
    <div className="search">
      <div className="header-search">
        <input
          type="text"
          placeholder="Название монеты"
          className="search-input"
          value={searchCoin}
          onChange={handleInputChange}
        />
        <Link to='/coin'>
          <button className="search-button" onClick={handleSearch}>
            Поиск
          </button>
        </Link>
      </div>
    </div>
  );
}