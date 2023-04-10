import React from "react";
import { Link } from "react-router-dom";

import robotSvg from "../../../assets/robot-logo.svg";
// import personSvg from '../../assets/person.png';

// import "./userHeader.scss";

const AdminHeader: React.FC = () => {
  return (
    <header className="header">
      <Link to="/admin">
        <div className="header__logo">
          <img width="36" src={robotSvg} alt="logo" />
          <div>
            <h1>Hobby Street</h1>
          </div>
        </div>
      </Link>
      <div className="header__nav">
        <Link to="admin/users">
          <div className="header__inscription">Пользователи</div>
        </Link>
        <div className="header__inscription">Заявки</div>
        <Link to="admin/personal-cabinet">
          <div className="header__inscription">Личный кабинет</div>
        </Link>
        <Link to="/">
          <div className="header__inscription">Выйти</div>
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

export default AdminHeader;
