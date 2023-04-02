import React from 'react';

import './userForm.scss';
import '../UI/valid-input.scss';

type UserFormProps = {
  value: number;
};

const UserForm: React.FC<UserFormProps> = ({ value }) => {
  return (
    <form className={value === 1 ? 'active-content-block-user-form' : 'content-block-user-form'}>
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
            />
            <div className="validation">Неверный формат</div>
          </div>
          <div className="input-field">
            <label htmlFor="email">Логин:</label>
            <input type="text" minLength={6} placeholder="kulnis7" required title="Минимум 8 символов" />
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
        <div className="sumbit-user-input">
          <input type="submit" value="Зарегистрироваться" />
        </div>
      </div>
    </form>
  );
};

export default UserForm;
