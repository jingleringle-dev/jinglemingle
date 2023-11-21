import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { GiftBox } from "components/domain/room/giftBox";
import { useGiftForm } from "contexts/GiftFormContext";
import ColorInput from "./colorInput/ColorInput";
import Button from "components/ui/button/Button";
import * as S from "./ColorForm.styled";

type Props = {
  setToggle: Dispatch<SetStateAction<number>>;
};

const TOGGLE_MESSAGE_FORM = 2;

export default function ColorForm({ setToggle }: Props) {
  const [boxcolor, setBoxColor] = useState("#2c906a");
  const [linecolor, setLineColor] = useState("#ec4122");

  const { giftData, setGiftData } = useGiftForm();

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    setGiftData({ ...giftData, boxcolor, linecolor });
    setToggle(TOGGLE_MESSAGE_FORM);
  };

  return (
    <S.Container onSubmit={onSubmitHandler}>
      <S.GiftBoxInputWrap>
        <GiftBox
          boxcolor={boxcolor}
          linecolor={linecolor}
          width={500}
          height={160}
        />
        <S.Text>색상을 골라주세요!</S.Text>
        <S.InputWrap>
          <ColorInput
            label="상자 색상"
            value={boxcolor}
            setColor={setBoxColor}
          />
          <ColorInput
            label="끈 색상"
            value={linecolor}
            setColor={setLineColor}
          />
        </S.InputWrap>
      </S.GiftBoxInputWrap>

      <Button width="100%" height="45px">
        내 선물은 여기!
      </Button>
    </S.Container>
  );
}
