import React from 'react';
import { Link } from 'react-router-dom';

import robotSvg from '../../assets/robot-logo.svg';
// import personSvg from '../../assets/person.png';

import './header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo">
          <img width="36" src={robotSvg} alt="logo" />
          <div>
            <h1>Hobby Street</h1>
          </div>
        </div>
      </Link>
      <div className="header__nav">
        <div className="header__inscription">Главная</div>
        <div className="header__inscription">Подписки</div>
        <Link to="/auth">
          <div className="header__inscription">Войти</div>
        </Link>
        <Link to="/registration">
          <div className="header__inscription">Зарегистрироваться</div>
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

export default Header;
