import React from "react";
import { useNavigate } from "react-router-dom";

import { useFieldState } from "../../../hooks/useFieldState";
import { useActions } from "../../../hooks/useActions";
import { InputChangeHandler } from "../../../types/types";

import "./userForm.scss";
import "../../UI/valid-input.scss";
import "react-toastify/dist/ReactToastify.css";

type UserFormProps = {
  value: number;
};

const UserForm: React.FC<UserFormProps> = ({ value }) => {
  const { registerUserAsync } = useActions();
  const navigate = useNavigate();

  const [email, setEmail] = useFieldState();
  const onEmailChange: InputChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const [login, setLogin] = useFieldState();
  const onLoginChange: InputChangeHandler = (e) => {
    setLogin(e.target.value);
  };

  const [password, setPassword] = useFieldState();
  const onPasswordChange: InputChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const onRegisterClick = (e: any) => {
    e.preventDefault();
    registerUserAsync(email, login, password, navigate);
  };

  return (
    <form
      className={
        value === 1
          ? "active-content-block-user-form"
          : "content-block-user-form"
      }
    >
      <div className="block-user-input">
        <div className="block-user-content">
          <div className="input-field">
            <label htmlFor="email">Почта:</label>
            <input
              type="email"
              placeholder="kulnis71@gmail.com"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}"
              title="kulnis71@gmail.com"
              value={email}
              onChange={onEmailChange}
            />
            <div className="validation">Неверный формат</div>
          </div>
          <div className="input-field">
            <label htmlFor="email">Логин:</label>
            <input
              type="text"
              minLength={6}
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
              Минимум 8 символов, одна цифра, одна буква в верхнем регистре и
              одна в нижнем
            </div>
          </div>
        </div>
        <div className="sumbit-user-input">
          <button onClick={onRegisterClick}>Зарегистрироваться</button>
        </div>
      </div>
    </form>
  );
};

export default UserForm;
