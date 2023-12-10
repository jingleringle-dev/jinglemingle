import React from "react";
import * as S from "./RoomHeader.styled";

interface Props {
  nickname: string;
}
export default function RoomHeader({ nickname }: Props) {
  return <S.Header>{`${nickname}의 방`}</S.Header>;
}
