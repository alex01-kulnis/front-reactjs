import React from 'react';

import './organizationForm.scss';
import '../UI/input-animate.scss';

type OrganizationFormProps = {
  value: number;
};

const OrganizationForm: React.FC<OrganizationFormProps> = ({ value }) => {
  return (
    <div className={value === 2 ? 'active-content-block-org-form' : 'content-block-org-form'}>
      <div className="block-org-input">
        <div className="block-content">
          <div className="input-field">
            <input type="text" name="name" autoComplete="off" required />
            <label htmlFor="Name" className="label-name">
              <span className="content-name">организация</span>
            </label>
          </div>
          <div className="input-field">
            <input type="text" name="name" autoComplete="off" required />
            <label htmlFor="Name" className="label-name">
              <span className="content-name">организация1</span>
            </label>
          </div>
          <div className="input-field">
            <input type="text" name="name" autoComplete="off" required />
            <label htmlFor="Name" className="label-name">
              <span className="content-name">организация2</span>
            </label>
          </div>
        </div>
        <div className="block-content">
          <div className="input-field">
            <input type="text" name="name" autoComplete="off" required />
            <label htmlFor="Name" className="label-name">
              <span className="content-name">организация</span>
            </label>
          </div>
          <div className="input-field">
            <input type="text" name="name" autoComplete="off" required />
            <label htmlFor="Name" className="label-name">
              <span className="content-name">организация1</span>
            </label>
          </div>
          <div className="input-field">
            <input type="text" name="name" autoComplete="off" required />
            <label htmlFor="Name" className="label-name">
              <span className="content-name">организация2</span>
            </label>
          </div>
        </div>
        <div className="sumbit-button">
          <button>Регистрация</button>
        </div>
      </div>
    </div>
  );
};

export default OrganizationForm;
