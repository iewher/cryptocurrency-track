import React, { useEffect } from 'react';
import axios from 'axios';

/*
Делаю API запрос на сайт cryptocompare, чтобы получить актуальный курс криптовалют
*/

const API_URL = 'https://min-api.cryptocompare.com/data/pricemulti';

function GET_API() {
  useEffect(() => {
    axios.get(API_URL, {
      params: {
        fsyms: 'BTC,ETH,LTC,BSW,CAKE',
        tsyms: 'USD,RUB'
      }
    })
    .then(response => {
      const data = response.data;
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);
}

export default GET_API;
