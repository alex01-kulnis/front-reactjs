import React, { useEffect } from "react";
import axios from "axios";

import { getAuthHeaders } from "../../../service/api";
import { useFieldState } from "../../../hooks/useFieldState";

import "./cabinetPage.scss";
import "../../../components/UI/valid-input.scss";

const CabinetPage = () => {
  const [organizationName, setOrganizationName] = useFieldState();
  const onOrganizationNameChange = (e) => {
    setOrganizationName(e.target.value);
  };

  const [email, setEmail] = useFieldState();
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [phone, setPhone] = useFieldState();
  const onPhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const [middleName, setMiddleName] = useFieldState();
  const onMiddleNameChange = (e) => {
    setMiddleName(e.target.value);
  };

  const [firstName, setFirstName] = useFieldState();
  const onFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const [lastName, setLastName] = useFieldState();
  const onLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const [login, setLogin] = useFieldState();
  const onLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const [password, setPassword] = useFieldState();
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const getUser = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/api/users/user`, getAuthHeaders());
      setOrganizationName(res.data[0].organization_name);
      setEmail(res.data[0].email);
      setPhone(res.data[0].phone);
      setMiddleName(res.data[0].middle_name);
      setFirstName(res.data[0].first_name);
      setLastName(res.data[0].first_name);
      setLogin(res.data[0].login);
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
  }, []);

  const save = async () => {
    try {
      const organization_name = organizationName;
      const middle_name = middleName;
      const first_name = firstName;
      const last_name = lastName;
      // const login = login;
      const res = await axios.patch(
        `http://localhost:3001/api/users`,
        {
          organization_name,
          email,
          phone,
          middle_name,
          first_name,
          last_name,
          login,
          password,
        },
        getAuthHeaders()
      );
    } catch (error) {}
  };

  const clear = async () => {
    setOrganizationName("");
    setEmail("");
    setPhone("");
    setMiddleName("");
    setFirstName("");
    setLastName("");
    setLogin("");
  };
  return (
    <div className="block-org-cabinet">
      <form className="block-form-cabinet">
        <div className="form-cabinet-content">
          <div className="input-field">
            <label htmlFor="NameOrg">Название организации:</label>
            <input
              type="text"
              placeholder="СДЮШОР"
              required
              title="Поле не должно быть пустым"
              value={organizationName}
              onChange={onOrganizationNameChange}
            />
            <div className="validation">Поле не должно быть пустым</div>
          </div>
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
            <label htmlFor="tel">Моб. телефон:</label>
            <input
              type="tel"
              placeholder="33xxxxxxx, 29xxxxxxx"
              required
              pattern="^\s*((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$"
              title="33xxxxxxx, 29xxxxxxx"
              value={phone}
              onChange={onPhoneChange}
            />
            <div className="validation">Неверный формат</div>
          </div>
        </div>
        <div className="form-cabinet-content">
          <div className="input-field">
            <label htmlFor="">Фамилия:</label>
            <input
              type="text"
              placeholder="Жмышенко"
              required
              title="Поле не должно быть пустым"
              value={middleName}
              onChange={onMiddleNameChange}
            />
            <div className="validation">Поле не должно быть пустым</div>
          </div>
          <div className="input-field">
            <label htmlFor="">Имя:</label>
            <input
              type="text"
              placeholder="Валерий"
              required
              title="Поле не должно быть пустым"
              value={firstName}
              onChange={onFirstNameChange}
            />
            <div className="validation">Поле не должно быть пустым</div>
          </div>
          <div className="input-field">
            <label htmlFor="">Отчество:</label>
            <input
              type="text"
              placeholder="Альбертович"
              required
              title="Поле не должно быть пустым"
              value={lastName}
              onChange={onLastNameChange}
            />
            <div className="validation">Поле не должно быть пустым</div>
          </div>
        </div>
        <div className="form-cabinet-content">
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
          {/* <div className="input-field">
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
          </div> */}
        </div>
        <div className="actions-button">
          <input type="button" className="clear-button" value="Очистить" onClick={clear} />
          <input type="submit" value="Сохранить" onClick={save} />
        </div>
      </form>
    </div>
  );
};

export default CabinetPage;
