import React, { useState, useEffect, useMemo } from 'react';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md'
import axios from 'axios';
import './style/top-100-style.css';
import Header from '../../../components/Header/Header'
import Bottom from '../../../components/Bottom/Bottom'
import { GET_TOP_100 } from '../../../components/GET_API/GET_API';

export default function Top100() {
  return (
    <div className='block'>
      <Header />
      <div className='Body'>
        <div className='body-header'>Топ-100 криптовалют</div>
        <div className='table'>
          <GET_TOP_100 />
        </div>
      </div>
      <Bottom />
    </div>
  );
}