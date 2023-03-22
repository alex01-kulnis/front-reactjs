import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../pages/user-pages/header';

const UserApp: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
    </Routes>
  );
};

export default UserApp;
