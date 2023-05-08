import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/search-style.css';
import axios from 'axios';
import Coin from '../../structure/pages/page-coin/Coin'

export const API_URL = 'https://min-api.cryptocompare.com/data/pricemultifull';
export const INTERVAL_TIME = 1000;
export const LOCAL_STORAGE_KEY = 'cryptoData';

const fetchData = async (coin, currency) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        fsyms: coin,
        tsyms: currency,
      },
    });
    const data = response.data;
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const SearchForm = ({ searchCoin, handleInputChange, handleSearch }) => {
  return (
    <div className="header-search">
      <input
        type="text"
        placeholder="Название монеты"
        className="search-input"
        value={searchCoin}
        onChange={handleInputChange}
      />
      <Link to="/coin">
        <button className="search-button" onClick={handleSearch}>
          Поиск
        </button>
      </Link>
    </div>
  );
};

export default function Search() {
  const [data, setData] = useState({});
  const [searchCoin, setSearchCoin] = useState('');
  const [intervalId, setIntervalId] = useState(null);

  // console.log(data);

  const startInterval = () => {
    const id = setInterval(() => {
      fetchData(searchCoin, 'USD')
        .then(data => {
          setData(data);
        })
        .catch(error => {
          console.error(error);
        });
    }, INTERVAL_TIME);
    setIntervalId(id);
  };

  const stopInterval = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const handleInputChange = event => {
    setSearchCoin(event.target.value);
    if (intervalId) {
      stopInterval();
    }
  };

  const handleSearch = () => {
    fetchData(searchCoin, 'USD')
      .then(data => {
        setData(data);
        if (!intervalId) {
          startInterval();
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="search">
      <SearchForm
        searchCoin={searchCoin}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
      />
    </div>
  );
}