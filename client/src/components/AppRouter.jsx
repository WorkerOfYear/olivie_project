import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import About from "../pages/about/About";
import Search from "../pages/search/Search";
import LoginPage from "../pages/login/LoginPage";
import Artist from "../pages/artist/Artist";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/artist/:search" element={<Artist />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/" element={<Search />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
