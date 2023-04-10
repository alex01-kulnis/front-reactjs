import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminHeader from "../components/admin-components/admin-header/AdminHeader";

const AdminApp: React.FC = () => {
  return (
    <>
      <AdminHeader />
      <Routes>
        <Route path="/" element={<div />} />
        <Route path="/registration" element={<div />} />
        <Route path="/auth" element={<div />} />
      </Routes>
    </>
  );
};

export default AdminApp;
