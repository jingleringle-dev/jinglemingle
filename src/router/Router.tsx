import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "pages";
import Layout from "../layout/Layout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}