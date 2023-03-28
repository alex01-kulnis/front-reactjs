import React from 'react';
import { Link } from 'react-router-dom';

import robotSvg from '../../assets/robot-logo.svg';
import personSvg from '../../assets/person.svg';

import './header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
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
          <div className="header__inscription">Заявки</div>
          <div className="header__inscription">Секции</div>
          <div className="header_person">
            <img width="36" src={personSvg} alt="logo" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
