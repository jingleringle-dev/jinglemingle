import React from "react";
import * as S from "./GiftBox.styled";

interface Props {
  boxcolor: string;
  linecolor: string;
  nickname?: string;
  width: number;
  height: number;
}

export default function GiftBox({
  boxcolor,
  linecolor,
  nickname,
  width,
  height,
}: Props) {
  return (
    <S.Container>
      <S.Giftbox
        width={width}
        height={height}
        boxcolor={boxcolor}
        linecolor={linecolor}
      />
      {nickname && <S.Nickname>{nickname}</S.Nickname>}
    </S.Container>
  );
}
