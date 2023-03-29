import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { CabinetPage, MainPage } from '../pages/user-pages';

const UserApp: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth" element={<CabinetPage />} />
      <Route path="/registration" element={<div />} />
    </Routes>
  );
};

export default UserApp;
