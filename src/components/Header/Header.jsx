import React, { useState } from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './style/header-style.css'
import Search from '../Search/Search'

import Home from '../../structure/pages/page-home/Home'
import Top100 from '../../structure/pages/page-top-100/Top100'
import Check from '../../structure/pages/page-check/Check'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className='Header'>
        <div className='name'>
          Cryptocurrency track
        </div>
            <div className='buttons'>
              <Link to='/'>
                <button className='button-home'>Главная</button>
              </Link>
              <Link to='/top-100'>
                <button className='button-top-100'>Топ-100</button>
              </Link>
              <Link to='/check'>
                <button className='button-check'>Отслеживаемое</button>
              </Link>
            </div>
        <div className='input'>
          <Search />
        </div>
    </div>
  )
}