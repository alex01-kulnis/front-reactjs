import React, { useContext } from "react";
import { Link } from "react-router-dom";

import robotSvg from "../../../assets/robot-logo.svg";
// import personSvg from '../../assets/person.png';

import "./userHeader.scss";
import { Context } from "../../..";
import { observer } from "mobx-react-lite";

const UserHeader: React.FC = observer(() => {
  const { user } = useContext(Context);

  const exit = () => {
    user.setRole("");
    user.setIsAuth(false);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  };

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
        {/* <div className="header-user__inscription">Подписки</div> */}
        {user._isAuth ? (
          <Link to="/">
            <div className="header-user__inscription" onClick={exit}>
              Выйти
            </div>
          </Link>
        ) : (
          <>
            <Link to="/auth">
              <div className="header-user__inscription">Войти</div>
            </Link>
            <Link to="/registration">
              <div className="header-user__inscription">Регистрация</div>
            </Link>
          </>
        )}
      </div>
    </header>
  );
});

/* <div className="header__person">
<div>Личный кабинет</div>
<div className="logo_cabinet">
  <img width="36" src={personSvg} alt="logo" />
</div>
</div> */

export default UserHeader;
