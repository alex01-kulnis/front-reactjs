import React from 'react';

import './userForm.scss';

type UserFormProps = {
  value: number;
};

const UserForm: React.FC<UserFormProps> = ({ value }) => {
  return (
    <div className={value === 1 ? 'active-content-block-user-form' : 'content-block-user-form'}>
      <div className="block-user-form">
        <div className="block-input">
          <div className="input-field">
            <input type="text" name="name" autoComplete="off" required />
            <label htmlFor="Name" className="label-name">
              <span className="content-name">Name</span>
            </label>
          </div>
          <div className="input-field">
            <input type="text" name="name" autoComplete="off" required />
            <label htmlFor="Name" className="label-name">
              <span className="content-name">Name</span>
            </label>
          </div>
          <div className="input-field">
            <input type="text" name="name" autoComplete="off" required />
            <label htmlFor="Name" className="label-name">
              <span className="content-name">Name</span>
            </label>
          </div>
        </div>
      </div>
      <button type="submit">Регистрация</button>
    </div>
  );
};

export default UserForm;
