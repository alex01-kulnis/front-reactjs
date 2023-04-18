import React from "react";
import { Link } from "react-router-dom";

import robotSvg from "../../../assets/robot-logo.svg";
// import personSvg from '../../assets/person.png';

import "./userHeader.scss";

const UserHeader: React.FC = () => {
  return (
    <header className="header-user">
      <Link to="/">
        <div className="header-user__logo">
          <img width="36" src={robotSvg} alt="logo" />
          <div>
            <h1>Hobby Street</h1>
          </div>
        </div>
      </Link>
      <div className="header-user__nav">
        <Link to="/">
          <div className="header-user__inscription">Главная</div>
        </Link>
        <div className="header-user__inscription">Подписки</div>
        <Link to="/auth">
          <div className="header-user__inscription">Войти</div>
        </Link>
        <Link to="/registration">
          <div className="header-user__inscription">Регистрация</div>
        </Link>
      </div>
    </header>
  );
};

/* <div className="header__person">
<div>Личный кабинет</div>
<div className="logo_cabinet">
  <img width="36" src={personSvg} alt="logo" />
</div>
</div> */

export default UserHeader;
