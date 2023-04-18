import React from "react";
import { Route, Routes } from "react-router-dom";

import { RegistrationPage, MainPage, AuthPage, GeneralSectionPage } from "../pages";
import { UserHeader } from "../components";

const UserApp: React.FC = () => {
  return (
    <>
      <UserHeader />
      <Routes>
        <Route path="/" element={<GeneralSectionPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </>
  );
};

export default UserApp;
