import React from "react";
import { Route, Routes } from "react-router-dom";

import { RegistrationPage, AuthPage, GeneralSectionPage } from "../pages";
import { Footer, UserHeader } from "../components";

const UserApp: React.FC = () => {
  return (
    <>
      <UserHeader />
      <Routes>
        <Route path="/" element={<GeneralSectionPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default UserApp;
