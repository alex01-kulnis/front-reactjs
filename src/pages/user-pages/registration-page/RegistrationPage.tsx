import React, { useState } from 'react';

import { OrganizationForm, UserForm } from '../../../components';

import './registrationPage.scss';

const RegistrationPage: React.FC = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <div className="form">
      <div className="registration">
        <div className="bloc-tabs">
          <button className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(1)}>
            Для пользоватей
          </button>
          <button className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(2)}>
            Для организаций
          </button>
        </div>
        <div className="content-form">
          <UserForm value={toggleState} />
          <OrganizationForm value={toggleState} />
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
