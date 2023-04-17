import React from "react";
import { Route, Routes } from "react-router-dom";
import { OrgHeader } from "../components";
import { CabinetPage, CreateSectionPage, SectionPage } from "../pages";

const OrganizationApp: React.FC = () => {
  return (
    <>
      <OrgHeader />
      <Routes>
        <Route path="/org/users" element={<div />} />
        <Route path="/org/cabinet" element={<CabinetPage />} />
        <Route path="/org/create-section" element={<CreateSectionPage />} />
        <Route path="/org/section" element={<SectionPage />} />
      </Routes>
    </>
  );
};

export default OrganizationApp;
