import React from "react";
import * as S from "./GiftCount.styled";

export default function GiftCount({ count }: { count: number }) {
  console.log(count);
  return <S.CountBox>벌써 {count}개의 선물을 받았어요!</S.CountBox>;
}
