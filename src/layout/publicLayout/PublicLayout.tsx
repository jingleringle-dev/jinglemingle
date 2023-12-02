import React from "react";
import { Outlet } from "react-router-dom";

import * as S from "./PublicLayout.styled";

const PublicLayout = () => {
  return (
    <S.PublicLayout>
      <Outlet />
    </S.PublicLayout>
  );
};

export default PublicLayout;
