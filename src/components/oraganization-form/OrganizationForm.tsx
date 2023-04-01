import React from 'react';

import './organizationForm.scss';
import '../UI/input-animate.scss';

type OrganizationFormProps = {
  value: number;
};

const OrganizationForm: React.FC<OrganizationFormProps> = ({ value }) => {
  return (
    <div className="block-org-form">
      <div className={value === 2 ? 'active-content-block-org-form' : 'content-block-org-form'}>
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

export default OrganizationForm;
