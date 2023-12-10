import React, { Dispatch, SetStateAction } from "react";
import * as S from "./ToggleButton.styled";

interface Props {
  isToggleOn: boolean;
  setIsToggleOn: Dispatch<SetStateAction<boolean>>;
}
export default function ToggleButton({ isToggleOn, setIsToggleOn }: Props) {
  const onToggleHandler = () => {
    setIsToggleOn((prev) => !prev);
  };
  return (
    <S.Container onClick={onToggleHandler}>
      <S.Circle $isToggleOn={isToggleOn} />
    </S.Container>
  );
}
