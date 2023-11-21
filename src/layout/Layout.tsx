import React from "react";
import { Outlet } from "react-router-dom";
import S from "./Layout.styled.ts";

export default function Layout() {
  return (
    <S.Layout>
      <Outlet />
    </S.Layout>
  );
}
