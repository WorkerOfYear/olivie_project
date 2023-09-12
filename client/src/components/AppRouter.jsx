import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import About from "../pages/about/About";
import Search from "../pages/search/Search";
import LoginPage from "../pages/login/LoginPage";
import Artist from "../pages/artist/Artist";
import { routes } from "../routes";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          element={<route.component />}
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
