import React, { Dispatch, SetStateAction, useState } from "react";
import * as S from "./Ask.style";
import { Button, Modal } from "components";
import { useBugReport } from "services/room";

const ISSUE_PROMPT_TEXT =
  "사용하면서 겪은 문제가 있다면 아래의 공간에 작성 후 확인버튼을 눌러주세요.";

interface AskProps {
  setShowAskModal: Dispatch<SetStateAction<boolean>>;
}

export default function Ask({ setShowAskModal }: AskProps) {
  const [bugReport, setBugReport] = useState("");
  const { mutate: bugReportMutate } = useBugReport({
    closeModal: () => setShowAskModal(false),
  });
  const onBugSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    bugReportMutate(bugReport);
  };

  return (
    <Modal setModal={setShowAskModal}>
      <S.AskLayout onSubmit={onBugSubmitHandler}>
        <S.Title>문의하기</S.Title>
        <S.Prompt>{ISSUE_PROMPT_TEXT}</S.Prompt>
        <S.Textarea onChange={(e) => setBugReport(e.target.value)} />
        <S.ButtonWrapper>
          <Button width="100%" height="25px">
            전송
          </Button>
          <Button
            type="button"
            width="100%"
            height="25px"
            color="main_brown"
            onClick={() => setShowAskModal(false)}
          >
            취소
          </Button>
        </S.ButtonWrapper>
      </S.AskLayout>
    </Modal>
  );
}
