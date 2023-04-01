import React from 'react';

import './organizationForm.scss';
import '../UI/input-animate.scss';

type OrganizationFormProps = {
  value: number;
};

const OrganizationForm: React.FC<OrganizationFormProps> = ({ value }) => {
  return (
    <div className={value === 2 ? 'active-content-org-form' : 'content-org-form'}>
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
  );
};

export default OrganizationForm;
