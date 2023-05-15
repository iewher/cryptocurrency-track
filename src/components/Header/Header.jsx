import React from 'react'
import { Link } from 'react-router-dom';
import './style/header-style.css'
import { ShowSearch } from '../Search/Search';

export default function Header() {
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
        <ShowSearch />
    </div>
  )
}