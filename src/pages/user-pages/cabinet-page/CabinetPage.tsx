import React from 'react';

import { Header, Tabs } from '../../../components';

import './cabinetPage.scss';

const CabinetPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="form">
        <Tabs />
      </div>
    </>
  );
};

export default CabinetPage;
