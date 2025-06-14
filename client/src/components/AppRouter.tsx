import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { routes } from "routes";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={routes.indexOf(route)}
          element={<route.component />}
          path={route.path}
        />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
