import React from "react";

import "./cabinetPage.scss";
import "../../../components/UI/valid-input.scss";

const CabinetPage = () => {
  return (
    <div className="block-org-cabinet">
      <div className="block-form-cabinet">
        <div className="form-cabinet-content">
          <div className="input-field">
            <label htmlFor="NameOrg">Название организации:</label>
            <input
              type="text"
              placeholder="СДЮШОР"
              required
              title="Поле не должно быть пустым"
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
            />
            <div className="validation">Поле не должно быть пустым</div>
          </div>
        </div>
        <div className="form-cabinet-content">
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
        </div>
        <div className="actions-button">
          <button className="clear-button">Очистить</button>
          <button>Сохранить</button>
        </div>
      </div>
    </div>
  );
};

export default CabinetPage;
