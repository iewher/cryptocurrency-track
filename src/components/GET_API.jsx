import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://min-api.cryptocompare.com/data/pricemulti';
const INTERVAL_TIME = 1000;

function GET_API() {
  const [data, setData] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, INTERVAL_TIME);
    return () => clearInterval(interval);
  }, []);

  const fetchData = () => {
    axios.get(API_URL, {
      params: {
        fsyms: 'BTC,ETH,LTC,BSW,CAKE',
        tsyms: 'USD,RUB'
      }
    })
    .then(response => {
      const data = response.data;
      setData(data);
    })
    .catch(error => {
      console.error(error);
    });
  };
}

export default GET_API;