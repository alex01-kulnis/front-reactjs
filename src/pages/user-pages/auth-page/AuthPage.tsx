import React from "react";

import "./authPage.scss";
import "../../../components/UI/valid-input.scss";

const AuthPage: React.FC = () => {
  return (
    <form className="auth-box">
      <div className="auth-form">
        <h1>Авторизация</h1>
        <div className="input-field">
          <label htmlFor="email">Логин:</label>
          <input
            type="text"
            minLength={6}
            placeholder="kulnis7"
            required
            title="Минимум 8 символов"
          />
          <div className="validation">Минимум 8 символов</div>
        </div>
        <div className="input-field">
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            placeholder="123kulniS"
            required
            pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*"
            title="Минимум 8 символов, одна цифра, одна буква в верхнем регистре и одна в нижнем"
          />
          <div className="validation">
            Минимум 8 символов, одна цифра, одна буква в верхнем регистре и одна в нижнем
          </div>
        </div>
        <input className="auth-input" type="submit" value="Войти" />
      </div>
    </form>
  );
};

export default AuthPage;
