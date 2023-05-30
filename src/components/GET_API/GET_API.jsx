import React, { useState, useEffect, useMemo } from 'react';
import './style/get-api-style.scss';
import axios from 'axios';

import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';

export const API_URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull';
export const INTERVAL_TIME = 1000;
export const LOCAL_STORAGE_KEY = 'cryptoData';

export function GET_TOP_100() {
    const [data, setData] = useState([]);
    const [selectedCoins, setSelectedCoins] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
          fetchData();
        }, INTERVAL_TIME);
        return () => clearInterval(interval);
      }, []);
    
      const fetchData = () => {
        const value = 100; 
        const currency = 'USD'

        axios.get(API_URL, {
          params: {
            limit: value,
            tsym: currency
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
    
      const selectedCoinIds = useMemo(() => {
        return selectedCoins.map((coin) => coin.CoinInfo.Id);
      }, [selectedCoins]);
    
      const handleCheckboxChange = (coin) => {
        const updatedCoins = [...selectedCoins];
        const coinIndex = updatedCoins.findIndex(
          (selectedCoin) => selectedCoin.CoinInfo.Id === coin.CoinInfo.Id
        );
        
        if (coinIndex === -1) {
          updatedCoins.push({ ...coin, checked: true });
        } else {
          updatedCoins.splice(coinIndex, 1);
        }
      
        const checkedCoins = updatedCoins.filter((selectedCoin) => selectedCoin.checked);
        setSelectedCoins(updatedCoins);
      
        if (checkedCoins.length > 0) {
          localStorage.setItem('myObjects', JSON.stringify(checkedCoins));
        } else {
          localStorage.removeItem('myObjects');
        }
      };

      const wasCheckboxChecked = (coin) => {
        const storedCoins = localStorage.getItem('myObjects');
        if (storedCoins) {
          const parsedCoins = JSON.parse(storedCoins);
          return parsedCoins.some((storedCoin) => storedCoin.CoinInfo.Id === coin.CoinInfo.Id);
        }
        return false;
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
                  <th>Price</th>
                  <th>1h %</th>
                  <th>24h %</th>
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
                      checked={wasCheckboxChecked(coin) || selectedCoinIds.includes(coin.CoinInfo.Id)}
                      onChange={() =>
                        handleCheckboxChange({
                          ...coin,
                          checked: !selectedCoinIds.includes(coin.CoinInfo.Id),
                        })
                      }
                    />
                    </td>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={`https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`}
                        alt={coin.CoinInfo.FullName}
                        className='image-tokens'
                      />
                      {coin.CoinInfo.FullName} | <span className='gray-text'>{coin.CoinInfo.Name}</span>
                    </td>
                    <td>{coin.DISPLAY && coin.DISPLAY.USD && coin.DISPLAY.USD.PRICE}</td>
                    <td
                      style={{
                        color:
                          coin.DISPLAY &&
                          coin.DISPLAY.USD &&
                          coin.DISPLAY.USD.CHANGEPCTHOUR >= 0
                            ? '#00FA9A'
                            : '#DC143C',
                      }}
                    >
                      {coin.DISPLAY && coin.DISPLAY.USD && coin.DISPLAY.USD.CHANGEPCTHOUR}%
                      {coin.DISPLAY && coin.DISPLAY.USD && coin.DISPLAY.USD.CHANGEPCTHOUR >= 0 ? (
                        <MdArrowDropUp />
                      ) : (
                        <MdArrowDropDown />
                      )}
                    </td>
                    <td
                      style={{
                        color:
                          coin.DISPLAY &&
                          coin.DISPLAY.USD &&
                          coin.DISPLAY.USD.CHANGEPCT24HOUR >= 0
                            ? '#00FA9A'
                            : '#DC143C',
                      }}
                    >
                      {coin.DISPLAY && coin.DISPLAY.USD && coin.DISPLAY.USD.CHANGEPCT24HOUR}%
                      {coin.DISPLAY && coin.DISPLAY.USD && coin.DISPLAY.USD.CHANGEPCT24HOUR >= 0 ? (
                        <MdArrowDropUp />
                      ) : (
                        <MdArrowDropDown />
                      )}
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
        <div>
            {data.length > 0 ? renderTable() : <p className='loading'>Loading...</p>}
        </div>
      )
}