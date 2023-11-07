import { Outlet } from "react-router-dom";
import S from "./styled.ts";

export default function Layout() {
  return (
    <S.Layout>
      <Outlet />
    </S.Layout>
  );
}
