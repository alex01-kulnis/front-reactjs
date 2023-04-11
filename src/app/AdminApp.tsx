import React from "react";
import { Route, Routes } from "react-router-dom";

import { UsersPage } from "../pages";
import { AdminHeader } from "../components";

const AdminApp: React.FC = () => {
  return (
    <>
      <AdminHeader />
      <Routes>
        <Route path="/admin/users" element={<UsersPage />} />
        {/* <Route path="/registration" element={<div />} /> */}
        <Route path="/admin/auth" element={<div />} />
      </Routes>
    </>
  );
};

export default AdminApp;
