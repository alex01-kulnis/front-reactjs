import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { RegistrationPage, MainPage } from '../pages/user-pages';
import { Header } from '../components';

const UserApp: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/auth" element={<div />} />
      </Routes>
    </>
  );
};

export default UserApp;
