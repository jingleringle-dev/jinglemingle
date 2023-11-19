import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import * as S from "./ColorInput.styled";

type Props = {
  label: string;
  value: string;
  setColor: Dispatch<SetStateAction<string>>;
};

export default function ColorInput({ label, value, setColor }: Props) {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input type="color" value={value} onChange={onChangeHandler} />
    </S.Container>
  );
}
