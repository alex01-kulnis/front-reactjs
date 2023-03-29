import React from 'react';

import { Header } from '../../../components';

import './mainPage.scss';

const Main: React.FC = () => {
  return (
    <>
      <Header />
      <div className="box">
        <div>Search</div>
        <div>Filter</div>
      </div>
    </>
  );
};

export default Main;
