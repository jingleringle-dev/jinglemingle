import React from "react";
import * as S from "./GiftList.styled";
import { GiftBox } from "../giftBox";

export default function GiftList() {
  return (
    <S.Container>
      <GiftBox
        boxcolor="#e41111"
        linecolor="#e1e1e1"
        nickname="썸남"
        width={105}
        height={95}
      />
      <GiftBox
        boxcolor="#ffe601"
        linecolor="#1a58b4"
        nickname="썸남"
        width={105}
        height={95}
      />
      <GiftBox
        boxcolor="#11e423"
        linecolor="#732fa3"
        nickname="썸남"
        width={105}
        height={95}
      />
    </S.Container>
  );
}
