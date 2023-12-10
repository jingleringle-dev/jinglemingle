import React, { ChangeEvent, FormEvent } from "react";
import * as S from "./MessageForm.styled";
import { useGiftForm } from "contexts/GiftFormContext";
import Button from "components/ui/button/Button";
import { useAddMessage } from "services/room";
import { useNavigate, useParams } from "react-router-dom";

const MAX_NICKNAME_LENGTH = 8;
const MAX_TEXT_LENGTH = 400;

export default function MessageForm() {
  const { id } = useParams() as { id: string };
  const { giftData, setGiftData } = useGiftForm();
  const navigate = useNavigate();
  const { mutate: addMessageMutate } = useAddMessage();

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (giftData.message === "" || giftData.writer === "") {
      alert("공백으로 둘 수 없습니다.");
      return null;
    }
    addMessageMutate(
      { userId: id, messageData: giftData },
      { onSuccess: () => navigate(`/room/${id}`) }
    );
  };

  const onChangeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setGiftData({ ...giftData, message: e.target.value });
  };

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setGiftData({ ...giftData, writer: e.target.value });
  };

  return (
    <S.Container onSubmit={onSubmitHandler}>
      <S.TextAreaWrap>
        <S.TextArea
          maxLength={MAX_TEXT_LENGTH}
          value={giftData.message}
          onChange={onChangeTextHandler}
        />
        <S.TextLengthCheck>{`${giftData.message.length}/${MAX_TEXT_LENGTH}`}</S.TextLengthCheck>
      </S.TextAreaWrap>

      <S.InputLabelWrap>
        <S.Label>From</S.Label>
        <S.Input
          maxLength={MAX_NICKNAME_LENGTH}
          onChange={onChangeInputHandler}
        />
      </S.InputLabelWrap>
      <Button width="100%" height="45px">
        오다 주웠다.
      </Button>
    </S.Container>
  );
}
