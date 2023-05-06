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
    <div className='header'>
        <div className='-header-name'>
          Cryptocurrency track
        </div>
            <div className='header-buttons'>
              <Link to='/'>
                <button className='header-button-home'>Главная</button>
              </Link>
              <Link to='/top-100'>
                <button className='header-button-top-100'>Топ-100</button>
              </Link>
              <Link to='/check'>
                <button className='header-button-check'>Отслеживаемое</button>
              </Link>
            </div>
        <div className='header-input'>
          <Search />
        </div>
    </div>
  )
}