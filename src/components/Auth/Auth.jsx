import React, { useState } from "react";
import "./style/auth-style.scss";
import { AiOutlineUser } from "react-icons/ai";

export const Auth = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleAuthLogin = () => {
    setShowLogin(true);
  };

  const handleAuthMenu = () => {
    setShowAuth(true);
  };

  const closeMenu = () => {
    setShowAuth(false);
    setShowLogin(false);
  };

  return (
    <div className="auth-user">
      <button className="auth-settings" onClick={handleToggleMenu}>
        <AiOutlineUser />
      </button>
      {showMenu && (
        <div className="auth-menu">
          <p>Меню</p>
          <button onClick={handleAuthLogin}>Авторизоваться</button>
          <button onClick={handleAuthMenu}>Зарегистрироваться</button>
        </div>
      )}
      {showAuth && (
        <div className="auth-signup">
          <button onClick={closeMenu} className="auth-close">
            Закрыть
          </button>
          <p>Sign up</p>
          <input placeholder="Email" type="email"></input>
          <input placeholder="Password" type="password"></input>
          <button>Создать профиль</button>
        </div>
      )}
      {showLogin && (
        <div className="auth-login">
          <button onClick={closeMenu} className="auth-close">
            Закрыть
          </button>
          <p>Log in</p>
          <input placeholder="Email" type="email"></input>
          <input placeholder="Password" type="password"></input>
          <button>Войти</button>
        </div>
      )}
    </div>
  );
};
