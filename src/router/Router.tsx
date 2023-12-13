import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  Home,
  Login,
  Signup,
  RoomPage,
  SelectRoom,
  ChangePassword,
} from "pages";
import { PublicLayout, Layout } from "layout";
import AddGiftPage from "pages/addGift/AddGiftPage";
import KakaoCallback from "pages/kakaoCallback/KakaoCallback";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="kakao/callback" element={<KakaoCallback />} />
          <Route path="signup" element={<Signup />} />
          <Route path="changePassword" element={<ChangePassword />} />
          <Route path="select" element={<SelectRoom />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/room/:id" element={<RoomPage />} />
          <Route path="/room/add/:id" element={<AddGiftPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
