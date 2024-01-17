import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import "../../scss/footer/footer.scss";

const URL_GIT: string = "https://github.com/iewher/cryptocurrency-track";
const URL_TG: string = "https://t.me/iewher";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-rights">
        <p>© 2023 Cryptocurrency track. All rights reserved</p>
      </div>
      <Link to={URL_GIT}>
        <button className="footer-git">
          <AiFillGithub className="icons" />
        </button>
      </Link>
      <Link to={URL_TG}>
        <button className="footer-telegram">
          <BsTelegram className="icons" />
        </button>
      </Link>
    </div>
  );
}
