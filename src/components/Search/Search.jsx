import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const API_URL_SEARCH = 'https://min-api.cryptocompare.com/data/pricemultifull';

const fetchData = (coin) => {
  const params = new URLSearchParams();

  params.append('fsyms', coin);
  params.append('tsyms', 'USD');

  return fetch(`${API_URL_SEARCH}?${params}`)
    .then((res) => res.json())
    .then((data) => {
        localStorage.setItem('coinObject', JSON.stringify(data));
        return data;
    })
    .catch((error) => {
      console.error(error.message);
    });
};

export const ShowSearch = () => {
  const [coin, setCoin] = useState('');

  const handleCoin = (event) => {
    setCoin(event.target.value);
  };

  const handleSubmit = () => {
    fetchData(coin);
    ShowCoinInfo(coin);
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Выберите монету'
        onChange={handleCoin}
      />
      <Link to='/coin'>
        <button onClick={handleSubmit}>Найти</button>
      </Link>
    </div>
  );
};

export const ShowCoinInfo = (coin) => {
  const storedData = localStorage.getItem('coinObject');
  const data = JSON.parse(storedData);

  return (
    <div className='coin'>
      <div className='coin-body'>
        <h2 className='coin-name'>{data.DISPLAY.BSW.USD.FROMSYMBOL}</h2>
        <p className='price'>Current Price: {data.RAW.BSW.USD.PRICE}</p>
        <p className='high'>24h High: {data.DISPLAY.BSW.USD.HIGH24HOUR}</p>
        <p className='low'>24h Low: {data.DISPLAY.BSW.USD.LOW24HOUR}</p>
      </div>
    </div>
  );
};
