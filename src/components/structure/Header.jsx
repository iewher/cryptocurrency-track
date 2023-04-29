import React, { useState } from 'react'
import '../style/header-style.css'

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
          <button className='button-home'>Главная</button>
          <button className='button-top-100'>Топ-100</button>
          <button className='button-check'>Отслеживаемое</button>
        </div>
        <div className='input'>
          <input type='text' placeholder='Название монеты' className='search'></input>
        </div>
        <div className='settings'>
          <button className='button-setting' onClick={toggleMenu}>Setting</button>
          {isOpen && (
            <div className='dropdown-menu'>
              {
                <button>Профиль</button>
              }
            </div>
          )}
        </div>
    </div>
  )
}