import React from 'react';

import './userForm.scss';

type UserFormProps = {
  value: number;
};

const UserForm: React.FC<UserFormProps> = ({ value }) => {
  return (
    <div className={value === 1 ? 'content  active-content' : 'content'}>
      <div className="field-item">
        <label htmlFor="">Логин</label>
        <input type="text" />
      </div>
      <div className="field-item">
        <label htmlFor="">Пароль</label>
        <input type="text" />
      </div>
      <div className="field-item">
        <label htmlFor="">Повторите пароль</label>
        <input type="text" />
      </div>
      <button>Регистрация</button>
    </div>
  );
};

export default UserForm;
