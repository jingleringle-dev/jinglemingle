import React from "react";
import * as S from "./GiftBox.styled";

interface Props {
  boxColor: string;
  lineColor: string;
  nickname?: string;
  width: number;
  height: number;
  onClick: () => void;
}
export default function GiftBox({
  boxColor,
  lineColor,
  nickname,
  width,
  height,
  onClick,
}: Props) {
  return (
    <S.Container>
      <S.Giftbox
        onClick={onClick}
        width={width}
        height={height}
        $boxColor={boxColor}
        $lineColor={lineColor}
      />
      {nickname && <S.Nickname>{nickname}</S.Nickname>}
    </S.Container>
  );
}
