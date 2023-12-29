import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../auth/Login";
import RegisterPage from "../auth/Register";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* Redirect to login if no other route matches */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default PublicRoutes;
