import React, { Dispatch, SetStateAction } from "react";
import * as S from "./Message.styled";
import { SimpleMessageType } from "types";

interface Props {
  setModal?: Dispatch<SetStateAction<boolean>>;
  closeButton?: boolean;
  messageData?: SimpleMessageType;
}
export default function Message({ setModal, closeButton, messageData }: Props) {
  return (
    <S.Container>
      <S.TopWrap>
        <S.From>{`From. ${messageData?.writer}`}</S.From>
        {closeButton && setModal && (
          <S.CloseButton onClick={() => setModal(false)} />
        )}
      </S.TopWrap>
      <S.Text>{messageData?.message}</S.Text>
    </S.Container>
  );
}
