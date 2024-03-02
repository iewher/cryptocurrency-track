import Auth from "../auth/Auth";
import { Link } from "react-router-dom";
import { ShowSearch } from "../search/Search";
import "../../scss/header/header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-name">
        <p>Cryptocurrency track</p>
      </div>
      <div className="header-buttons">
        <Link to="/">
          <button className="header-button-home">Главная</button>
        </Link>
        <Link to="/top-100">
          <button className="header-button-top-100">Топ-100</button>
        </Link>
        <Link to="/check">
          <button className="header-button-check">Отслеживаемое</button>
        </Link>
      </div>
      <ShowSearch />
      <Auth />
    </div>
  );
};

export default Header;
