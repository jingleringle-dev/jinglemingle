import React, { useState } from "react";
import { RoomLayout } from "../../layout/roomLayout";
import * as S from "./GiftForm.styled";
import ColorForm from "./form/colorForm/ColorForm";
import MessageForm from "./form/messageForm/MessageForm";
import { useLocation } from "react-router-dom";

export default function GiftForm() {
  const [toggle, setToggle] = useState(1);
  const location = useLocation();
  const nickname = location.state || "친구";
  return (
    <RoomLayout>
      <S.Container>
        <S.Nickname>{`To. ${nickname}`}</S.Nickname>
        {toggle === 1 && <ColorForm setToggle={setToggle} />}
        {toggle === 2 && <MessageForm />}
      </S.Container>
    </RoomLayout>
  );
}
