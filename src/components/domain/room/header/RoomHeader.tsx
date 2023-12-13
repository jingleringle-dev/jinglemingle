import React, { useState } from "react";
import * as S from "./RoomHeader.styled";
import { HamburgerIcon } from "components/ui/icons";
import Sidebar from "../sidebar/Sidebar";

interface Props {
  nickname: string;
}
export default function RoomHeader({ nickname }: Props) {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <>
      <S.Header>
        {`${nickname}의 방`}
        <S.IconPosition onClick={() => setIsOpenSidebar((prev) => !prev)}>
          <HamburgerIcon />
        </S.IconPosition>
      </S.Header>
      <Sidebar isOpen={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />
      {isOpenSidebar && <S.Overlay onClick={() => setIsOpenSidebar(false)} />}
    </>
  );
}
