import React, { useState } from "react";
import * as S from "./TopMenu.styled";
import { GiftCount } from "./giftCount";
import { RoomSettingIcon } from "components/ui/icons";
import { EditNickIcon } from "components/ui/icons";
import { useNavigate } from "react-router-dom";
import EditNick from "./editNick/EditNick";

interface Props {
  isDDay: boolean;
  toggle: React.JSX.Element;
  isMyRoom: boolean;
}
// !isDDay &&

export default function TopMenu({ isDDay, toggle, isMyRoom }: Props) {
  const [nicknameModal, setNicknameModal] = useState(false);
  const navigation = useNavigate();

  return (
    <S.Container>
      {!isDDay && <GiftCount />}

      {isMyRoom && !isDDay && (
        <S.Wrapper>
          <EditNickIcon onClick={() => setNicknameModal(true)} />
          <RoomSettingIcon onClick={() => navigation("/select")} />
        </S.Wrapper>
      )}
      {isDDay && toggle}
      {nicknameModal && <EditNick setNicknameModal={setNicknameModal} />}
    </S.Container>
  );
}
