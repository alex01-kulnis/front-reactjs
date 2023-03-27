import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main } from '../pages/user-pages';

const UserApp: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/auth" element={<div />} />
      <Route path="/registration" element={<div />} />
    </Routes>
  );
};

export default UserApp;
