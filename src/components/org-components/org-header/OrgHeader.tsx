import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../..";
import robotSvg from "../../../assets/robot-logo.svg";
// import personSvg from '../../assets/person.png';

import "./orgHeader.scss";

const OrgHeader: React.FC = () => {
  const { user } = useContext(Context);

  const exist = () => {
    user.setRole("");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  };

  return (
    <header className="header-org">
      <Link to="/">
        <div className="header-org__logo">
          <img width="36" src={robotSvg} alt="logo" />
          <div>
            <h1>Hobby Street</h1>
          </div>
        </div>
      </Link>
      <div className="header-org__nav">
        <Link to="/">
          <div className="header-org__inscription">Главная</div>
        </Link>
        <Link to="/org/cabinet">
          <div className="header-org__inscription">Личный кабинет</div>
        </Link>
        <Link to="/org/create-section">
          <div className="header-org__inscription">Создать секцию</div>
        </Link>
        <Link to="/org/section">
          <div className="header-org__inscription">Секции</div>
        </Link>
        <Link to="/">
          <div className="header-org__inscription" onClick={exist}>
            Выйти
          </div>
        </Link>
      </div>
    </header>
  );
};

export default OrgHeader;
