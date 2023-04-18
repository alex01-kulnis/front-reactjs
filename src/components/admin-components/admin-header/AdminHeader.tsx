import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../..";
import robotSvg from "../../../assets/robot-logo.svg";
// import personSvg from '../../assets/person.png';

import "./adminHeader.scss";

const AdminHeader: React.FC = () => {
  const { user } = useContext(Context);
  const exist = () => {
    // user.setUser({});
    user.setRole("");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  };

  return (
    <header className="header-admin">
      <Link to="/admin">
        <div className="header-admin__logo">
          <img width="36" src={robotSvg} alt="logo" />
          <div>
            <h1>Hobby Street</h1>
          </div>
        </div>
      </Link>
      <div className="header-admin__nav">
        <Link to="/admin/users">
          <div className="header-admin__inscription">Пользователи</div>
        </Link>
        <Link to="/admin/sections">
          <div className="header-admin__inscription">Секции</div>
        </Link>
        <Link to="/admin/appplications">
          <div className="header-admin__inscription">Заявки</div>
        </Link>
        <Link to="/">
          <div className="header-admin__inscription" onClick={exist}>
            Выйти
          </div>
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
