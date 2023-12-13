import React, { Dispatch, SetStateAction, useState } from "react";
import * as S from "./EditNick.style";
import { Button, Modal } from "components";
import { useChangeNickname } from "services";

interface EditNickProps {
  setNicknameModal: Dispatch<SetStateAction<boolean>>;
}
export default function EditNick({ setNicknameModal }: EditNickProps) {
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState(false);
  const { mutate } = useChangeNickname();
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(nickname);
    setNicknameModal(false);
  };

  return (
    <Modal setModal={setNicknameModal}>
      <S.EditLayout onSubmit={onSubmitHandler}>
        <S.Title>닉네임 변경</S.Title>

        <S.TextInput
          onChange={(e) => {
            setNickname(e.target.value);
            setError(e.target.value.length > 8);
          }}
          maxLength={8}
        />
        {error && <S.ErrorText>여덟글자 이하로 작성하세요!</S.ErrorText>}
        <S.ButtonWrapper>
          <Button width="100%" height="25px">
            전송
          </Button>
          <Button
            type="button"
            width="100%"
            height="25px"
            color="main_brown"
            onClick={() => setNicknameModal(false)}
          >
            취소
          </Button>
        </S.ButtonWrapper>
      </S.EditLayout>
    </Modal>
  );
}
