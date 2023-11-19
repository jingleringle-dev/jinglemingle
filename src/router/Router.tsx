import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home, Login, Signup, RoomPage } from "pages";
import Layout from "../layout/Layout";
import AddGiftPage from "pages/addGift/AddGiftPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="/room/:id" element={<RoomPage />} />
          <Route path="/room/add/:id" element={<AddGiftPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
