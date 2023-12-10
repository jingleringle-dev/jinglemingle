import React from "react";
import * as S from "./Button.styled";
import { colors } from "styles/theme";

type Props = {
  children: React.ReactNode;
  width: string;
  height: string;
  color?: keyof typeof colors;
  onClick?: () => void;
  type?: "button";
};
export default function Button({
  children,
  width,
  height,
  color = "main_red",
  onClick,
  type,
}: Props) {
  return (
    <S.Button
      type={type}
      $width={width}
      $height={height}
      $color={color}
      onClick={onClick}
    >
      {children}
    </S.Button>
  );
}
