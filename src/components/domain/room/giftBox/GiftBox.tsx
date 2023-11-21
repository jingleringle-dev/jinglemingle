import React from "react";
import * as S from "./GiftBox.styled";
import { GiftBoxIcon } from "assets";

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
      <GiftBoxIcon css={() => S.giftbox(boxColor, lineColor, width, height)} />
      {/* css 설정 수정 필요 -> 화면 상에 에러는 발생하지 않으나 console에 에러발생 */}
      {nickname && <S.Nickname>{nickname}</S.Nickname>}
    </S.Container>
  );
}
