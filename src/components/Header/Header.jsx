import React, { useState } from 'react';
import './style/header-style.scss';
import { AiOutlineUser } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import { ShowSearch } from '../Search/Search';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  }

  const handleAuthLogin = () => {
    setShowLogin(true);
  }

  const handleAuthMenu = () => {
    setShowAuth(true);
  }

  const closeMenu = () => {
    setShowAuth(false);
    setShowLogin(false);
  }

  return (
    <div className='header'>
        <div className='header-name'>
          <p>Cryptocurrency track</p>
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
        <div className="header-user">
          <button className='header-settings' onClick={handleToggleMenu}><AiOutlineUser /></button>
          {showMenu && (
            <div className='header-menu'>
              <p>Меню</p>
              <button onClick={handleAuthLogin}>Авторизоваться</button>
              <button onClick={handleAuthMenu}>Зарегистрироваться</button>
            </div>
          )}
          {showAuth && (
            <div className='header-auth'>
              <button onClick={closeMenu} className='header-auth-close'>Закрыть</button>
              <p>Sign up</p>
              <input placeholder='Email' type='email'></input>
              <input placeholder='Password' type='password'></input>
              <button>Создать профиль</button>
            </div>
          )}
          {showLogin && (
            <div className='header-login'>
              <button onClick={closeMenu} className='header-auth-close'>Закрыть</button>
              <p>Log in</p>
              <input placeholder='Email' type='email'></input>
              <input placeholder='Password' type='password'></input>
              <button>Войти</button>
            </div>
          )}
        </div>
    </div>
  )
}