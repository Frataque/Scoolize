import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Messagerie from "../screens/Messagerie/Messagerie";
import Navbar from "../components/NavBar/NavBar";
import AllConv from "../screens/AllConv/AllConv";

const AmbasRoutes: React.FC = (props) => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<AllConv />} />
        <Route path={"/messagerie"} element={<Messagerie />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};

export default AmbasRoutes;
