import React from "react";
import { Route, Routes } from "react-router-dom";

import { RegistrationPage, MainPage } from "../pages";
import { UserHeader } from "../components";

const UserApp: React.FC = () => {
  return (
    <>
      <UserHeader />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/auth" element={<div />} />
      </Routes>
    </>
  );
};

export default UserApp;
