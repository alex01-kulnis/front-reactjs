import React, { useState } from 'react';

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
          <div className="content-tabs">
            <div className={toggleState === 1 ? 'content  active-content' : 'content'}>
              <h2>Content 1</h2>
              <hr />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum qui adipisci.</p>
            </div>

            <div className={toggleState === 2 ? 'content  active-content' : 'content'}>
              <h2>Content 2</h2>
              <hr />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum qui adipisci.</p>
            </div>
          </div>
        </div>
        {/* <div className="bloc-tabs">
        <button className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(1)}>
          Для пользователей
        </button>
        <button className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(2)}>
          Для организаций
        </button>
      </div> */}
      </div>
      {/* <div className="content-form">
          <div className="content-tabs">
            <div>
              <h2>Content 1</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati praesentium incidunt quia aspernatur
                quasi quidem facilis quo nihil vel voluptatum?
              </p>
            </div>

            <div>
              <h2>Content 2</h2>
              <hr />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum qui adipisci.</p>
            </div>
          </div>
        </div> */}
    </div>
  );
};

export default RegistrationPage;
