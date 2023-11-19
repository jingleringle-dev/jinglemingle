import React from "react";
import * as S from "./RoomLayout.styled";
import room1 from "../../../assets/room1.jpg";

type Props = {
  children: React.ReactNode;
  opacity?: boolean;
};
export default function RoomLayout({ children, opacity }: Props) {
  return (
    <S.Container>
      <S.BackgroundImage $bgImg={room1} $opacity={opacity} />
      {children}
    </S.Container>
  );
}
