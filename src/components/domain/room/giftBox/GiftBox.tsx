import React from "react";
import * as S from "./GiftBox.styled";
import GiftBoxSVG from "components/ui/gift/GiftBoxSVG";

type Props = {
  boxColor: string;
  lineColor: string;
  nickname?: string;
  width: string;
  height: string;
};

export default function GiftBox({
  boxColor,
  lineColor,
  nickname,
  width,
  height,
}: Props) {
  return (
    <S.Container>
      <GiftBoxSVG
        boxColor={boxColor}
        lineColor={lineColor}
        width={width}
        height={height}
      />
      {nickname && <S.Nickname>{nickname}</S.Nickname>}
    </S.Container>
  );
}
