import React, { useState } from "react";
import { RoomLayout } from "../../layout/roomLayout";
import * as S from "./GiftForm.styled";
import ColorForm from "./form/colorForm/ColorForm";
import MessageForm from "./form/messageForm/MessageForm";

export default function GiftForm() {
  const [toggle, setToggle] = useState(1);

  return (
    <RoomLayout>
      <S.Container>
        <S.Nickname>To. 현징</S.Nickname>
        {toggle === 1 && <ColorForm setToggle={setToggle} />}
        {toggle === 2 && <MessageForm />}
      </S.Container>
    </RoomLayout>
  );
}
