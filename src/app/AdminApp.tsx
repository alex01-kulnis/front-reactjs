import React from "react";
import { Route, Routes } from "react-router-dom";

import { ApplicationsPage, GeneralSectionPage, MainSectionPage, UsersPage } from "../pages";
import { AdminHeader } from "../components";

const AdminApp: React.FC = () => {
  return (
    <>
      <AdminHeader />
      <Routes>
        <Route path="/" element={<GeneralSectionPage />} />
        <Route path="/admin/users" element={<UsersPage />} />
        <Route path="/admin/sections" element={<MainSectionPage />} />
        <Route path="/admin/appplications" element={<ApplicationsPage />} />
      </Routes>
    </>
  );
};

export default AdminApp;
