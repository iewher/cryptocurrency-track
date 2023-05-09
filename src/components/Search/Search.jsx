import React, { useState } from 'react';
import GET_API_SEARCH from '../GET_API/GET_API_SEARCH'
import SearchForm from './Search-form';
import Coin from '../../structure/pages/page-coin/Coin';

export const INTERVAL_TIME = 1000;

export default function Search() {
  const [data, setData] = useState({});
  const [searchCoin, setSearchCoin] = useState('');
  const [intervalId, setIntervalId] = useState(null);

  const startInterval = () => {
    const id = setInterval(() => {
      GET_API_SEARCH(searchCoin, 'USD')
        .then(data => {
          setData(data);
          <Coin data={data} />
          // console.log(data);
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
    GET_API_SEARCH(searchCoin, 'USD')
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
