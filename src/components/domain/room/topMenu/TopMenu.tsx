import React from "react";
import * as S from "./TopMenu.styled";
import { GiftCount } from "./giftCount";
export default function TopMenu() {
  /* ChangeRoom컴포넌트 icon으로 대체하기 */
  return (
    <S.Container>
      <GiftCount />
      <S.Wrapper>
        <S.ChangeRoom />
        <S.ChangeRoom>i</S.ChangeRoom>
      </S.Wrapper>
    </S.Container>
  );
}
