import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CandidaturesPage from "../page_prepare/Candidatures";
import GestionFormationPage from "../page_prepare/GestionFormation";
import MessageriePage from "../page_prepare/Messagerie";
import AccueilPage from "../page_prepare/Accueil";

import Navbar from "../components/NavBar/NavBar";
import Ambas from "../screens/AmbasPrepare/Ambas";
import Messagerie from "../screens/Messagerie/Messagerie";

// ... import other school pages

const SchoolRoutes: React.FC = (props) => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AccueilPage />} />
        <Route path="/candidatures" element={<CandidaturesPage />} />
        <Route path="/gestion-formations" element={<GestionFormationPage />} />
        <Route path="/messagerie-prepare" element={<Messagerie />} />
        <Route path="/ambas" element={<Ambas />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default SchoolRoutes;
