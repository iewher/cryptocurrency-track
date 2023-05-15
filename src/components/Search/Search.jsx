import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style/search-style.css'
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md'

const API_URL_SEARCH = 'https://api.coingecko.com/api/v3/coins';

const fetchData = (coin) => {

  return fetch(`${API_URL_SEARCH}/${coin}`)
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
          className="search-input"
        />
        <Link to='/coin'>
          <button onClick={handleSubmit} className="search-button">Найти</button>
        </Link>
    </div>
  );
};

export const ShowCoinInfo = () => {
  const storedData = localStorage.getItem('coinObject');
  const data = JSON.parse(storedData);

  return (
    <div className='coin'>
      <div className='coin-body'>
      <div className='coin-name'>
        { <img src={`${data.image.small}`} alt={data.name} /> }
        <h2>
          {data.name} | <span className='coin-symbol' style={{ textTransform: 'uppercase' }}>{data.symbol}</span>
        </h2>
      </div>
        <div className='coin-price'>
          <p>Цена: {data.market_data.current_price.usd} $</p>
          <details>
              <summary>Изменения цены</summary>
              {[
                { interval: '1 час', dataKey: 'price_change_percentage_1h_in_currency' },
                { interval: '1 день', dataKey: 'price_change_percentage_24h_in_currency' },
                { interval: '7 дней', dataKey: 'price_change_percentage_7d_in_currency' },
                { interval: '14 дней', dataKey: 'price_change_percentage_14d_in_currency' },
                { interval: '30 дней', dataKey: 'price_change_percentage_30d_in_currency' },
                { interval: '60 дней', dataKey: 'price_change_percentage_60d_in_currency' },
                { interval: '1 год', dataKey: 'price_change_percentage_1y_in_currency' },
              ].map(({ interval, dataKey }) => (
                <p key={interval}>
                  {`${interval}: `}
                  <span style={{ color: data.market_data[dataKey].usd >= 0 ? '#00FA9A' : '#DC143C' }}>
                    {data.market_data[dataKey].usd} %
                    {data.market_data[dataKey].usd >= 0 ? <MdArrowDropUp /> : <MdArrowDropDown />}
                  </span>
                </p>
              ))}
            </details>
        </div>
        <div className='coin-details'>
          <p>BSCSCAN: <a href={data.links.blockchain_site}>{data.links.blockchain_site}</a></p>
          <p>Contract: {data.contract_address}</p>
        </div>
        <div>
          <details>
            <summary>Ссылки:</summary>
            <p className='coin-links'>Сайт: <a href={data.links.homepage}>{data.links.homepage}</a></p>
            <p className='coin-links'>Документация: <a href={data.links.official_forum_url}>{data.links.official_forum_url}</a></p>
            <p className='coin-links'>GitHub: <a href={data.links.repos_url.github[0]}>{data.links.repos_url.github[0]}</a></p>
          </details>
        </div>
      </div>
    </div>
  );
};
