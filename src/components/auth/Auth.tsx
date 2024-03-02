import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Modal } from "antd";
import "../../scss/auth/auth.scss";

const Auth = () => {
  const [modalOpenAuth, setModalOpenAuth] = useState<boolean>(false);
  const [modalOpenLogin, setModalOpenLogin] = useState<boolean>(false);
  const [modalOpenReg, setModalOpenReg] = useState<boolean>(false);

  const handleLogin = () => {
    setModalOpenAuth(false);
    setModalOpenLogin(true);
  };

  const handleReg = () => {
    setModalOpenAuth(false);
    setModalOpenReg(true);
  };

  return (
    <div className="auth-user">
      <button className="auth-settings" onClick={() => setModalOpenAuth(true)}>
        <AiOutlineUser />
      </button>
      <Modal
        title="Меню"
        centered
        open={modalOpenAuth}
        onCancel={() => setModalOpenAuth(false)}
      >
        <button onClick={handleLogin}>Авторизоваться</button>
        <button onClick={handleReg}>Зарегистрироваться</button>
      </Modal>
      <Modal
        title="Войти"
        centered
        open={modalOpenLogin}
        onCancel={() => setModalOpenLogin(false)}
      >
        <input type="text" placeholder="Введи email" />
        <input type="text" placeholder="Введи пароль" />
      </Modal>
      <Modal
        title="Регистрация"
        centered
        open={modalOpenReg}
        onCancel={() => setModalOpenReg(false)}
      >
        <input type="text" placeholder="Введи email" />
        <input type="text" placeholder="Введи пароль" />
        <input type="text" placeholder="Повторите пароль" />
        <input type="checkbox" />
      </Modal>
    </div>
  );
};

export default Auth;
