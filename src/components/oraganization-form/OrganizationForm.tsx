import React from 'react';

import './organizationForm.scss';

type OrganizationFormProps = {
  value: number;
};

const OrganizationForm: React.FC<OrganizationFormProps> = ({ value }) => {
  return (
    <div className={value === 2 ? 'content  active-content' : 'content'}>
      <div className="field-item">
        <label htmlFor="">Логин2</label>
        <input type="text" />
      </div>
      <div className="field-item">
        <label htmlFor="">Пароль2</label>
        <input type="text" />
      </div>
      <div className="field-item">
        <label htmlFor="">Повторите пароль2</label>
        <input type="text" />
      </div>
      <button>Регистрация1</button>
    </div>
  );
};

export default OrganizationForm;
