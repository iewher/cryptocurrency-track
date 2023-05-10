import React, { useState, useEffect, useMemo } from 'react';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md'
import axios from 'axios';
import './style/get-api-style.css'

export const API_URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull';
export const INTERVAL_TIME = 5000;
export const LOCAL_STORAGE_KEY = 'cryptoData';

export function GET_TOP_100() {
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
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
        })
        .catch(error => {
          console.error(error);
        });
      };
    
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
                        checked={selectedCoinIds.includes(coin.CoinInfo.Id)}
                        onChange={() => handleCheckboxChange(coin)}
                      />
                    </td>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={`https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`}
                        alt={coin.CoinInfo.FullName}
                        className='image-tokens'
                      />
                      {coin.CoinInfo.FullName}
                    </td>
                    <td>{coin.CoinInfo.Name}</td>
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

export function GET_SELECTION_COIN({ selectedCoins = [], handleCheckboxChange }) {
    const selectedCoinIds = useMemo(() => {
      return selectedCoins.map((coin) => coin.CoinInfo.Id);
    }, [selectedCoins]);
    
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
                  <th>1h %</th>
                  <th>24h %</th>
                  <th>Market Cap</th>
                </tr>
              </thead>
              <tbody>
                {selectedCoins.map((coin, index) => (
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
                      <img
                        src={`https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`}
                        alt={coin.CoinInfo.FullName}
                        className='image-tokens'
                      />
                      {coin.CoinInfo.FullName}
                    </td>
                    <td>{coin.CoinInfo.Name}</td>
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
          <div>{selectedCoins.length > 0 ? renderTable() : <p className='loading'>На данный момент вы не выбрали криптовалюты, которые хотите отслеживать</p>}</div>
      ) 
  }