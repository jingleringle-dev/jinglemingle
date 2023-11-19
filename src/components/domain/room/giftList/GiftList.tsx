import React from "react";
import * as S from "./GiftList.styled";
import { GiftBox } from "../giftBox";

export default function GiftList() {
  return (
    <S.Container>
      <GiftBox
        boxColor="#e41111"
        lineColor="#e1e1e1"
        nickname="썸남"
        width="105"
        height="95"
      />
      <GiftBox
        boxColor="#ffe601"
        lineColor="#1a58b4"
        nickname="썸남"
        width="105"
        height="95"
      />
      <GiftBox
        boxColor="#11e423"
        lineColor="#732fa3"
        nickname="썸남"
        width="105"
        height="95"
      />
    </S.Container>
  );
}
