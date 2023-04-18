import React from "react";
import { Route, Routes } from "react-router-dom";
import { WelcomePage } from "../pages/welcome/welcome";
import { ChoosePage } from "../pages/choose";
import { Layout } from "../components/layout";
import ComparitionPage from "../pages/comparition";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WelcomePage />} />
        <Route path="choose" element={<ChoosePage />} />
        <Route path="comparition" element={<ComparitionPage />} />
      </Route>
    </Routes>
  );
}

export { AppRoutes };

//<Route path="search/:query" element={<SearchResults />}></Route>