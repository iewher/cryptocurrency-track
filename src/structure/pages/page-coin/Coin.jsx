import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style/coin-style.css'
import { DisplayData } from '../../../components/Search/Search';
import { API_URL } from '../../../components/Search/Search';

const fetchData = async (coin, currency) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        fsyms: coin,
        tsyms: currency,
      },
    });
    const data = response.data;
    return data;
    console.log(data);
  } catch (error) {
    console.error(error);
    return null;
  }
};

const Coin = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData('BTC', 'USD')
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className='coin'>
      <div className='coin-body'>
        <DisplayData data={data} />
      </div>
    </div>
  );
};

export default Coin;
