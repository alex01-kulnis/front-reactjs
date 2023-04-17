import React, { useContext } from "react";
import axios from "axios";

import { Context } from "../../..";
import { useFieldState } from "../../../hooks/useFieldState";
import { InputChangeHandler } from "../../../types/types";

import "./authPage.scss";
import "../../../components/UI/valid-input.scss";

const AuthPage: React.FC = () => {
  const { user } = useContext(Context);

  const [login, setLogin] = useFieldState();
  const onLoginChange: InputChangeHandler = (e) => {
    setLogin(e.target.value);
  };

  const [password, setPassword] = useFieldState();
  const onPasswordChange: InputChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const onAuthClick = async (e: any) => {
    // e.preventDefault();
    // registerUserAsync(email, login, password, navigate);

    try {
      const res = await axios.post("http://localhost:3001/api/login", { login, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      alert("ура");
      user.setRole(res.data.role);
      const role = user.getRole();

      // console.log("res", res.data);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <form className="auth-box">
      <div className="auth-form">
        <h1>Авторизация</h1>
        <div className="input-field">
          <label htmlFor="email">Логин:</label>
          <input
            type="text"
            minLength={8}
            placeholder="kulnis7"
            required
            title="Минимум 8 символов"
            value={login}
            onChange={onLoginChange}
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
            value={password}
            onChange={onPasswordChange}
          />
          <div className="validation">
            Минимум 8 символов, одна цифра, одна буква в верхнем регистре и одна в нижнем
          </div>
        </div>
        <input className="auth-input" type="submit" value="Войти" onClick={onAuthClick} />
      </div>
    </form>
  );
};

export default AuthPage;
