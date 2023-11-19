import React from "react";
import * as S from "./Button.styled";

type Props = {
  children: React.ReactNode;
  width: string;
  height: string;
  green?: boolean;
};
export default function Button({ children, width, height, green }: Props) {
  return (
    <S.Button $width={width} $height={height} $green={green}>
      {children}
    </S.Button>
  );
}
