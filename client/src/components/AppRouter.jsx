import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "../routes/about/About";
import Search from "../routes/search/Search";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/about" element={<About />} />
      <Route exact path="/" element={<Search />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
