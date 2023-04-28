import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API_KEY = 'ef000bc3-91f5-4280-9760-88837d1da118';
const API_URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest';

function GET_API() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(API_URL, {
      params: {
        symbol: 'BTC'
      },
      headers: {
        'X-CMC_PRO_API_KEY': API_KEY
      }
    })
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);

  return (
    <div>
      <h1>Курс биткоина</h1>
      <p>Цена: {data?.data?.BTC?.quote?.USD?.price}</p>
    </div>
  );
}

export default GET_API;
