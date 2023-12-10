import React, { useState } from "react";
import * as S from "./TopMenu.styled";
import { GiftCount } from "./giftCount";
import { AskIcon, InformationIcon, RoomSettingIcon } from "components/ui/icons";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "components";
import { useBugReport } from "services/room";

interface Props {
  isDDay: boolean;
  toggle: React.JSX.Element;
  isMyRoom: boolean;
}

const TOOLTIP_TEXT = "선물은 25일부터 확인할 수 있어요";
const ISSUE_PROMPT_TEXT =
  "사용하면서 겪은 문제가 있다면 아래의 공간에 작성 후 확인버튼을 눌러주세요.";

export default function TopMenu({ isDDay, toggle, isMyRoom }: Props) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showAskModal, setShowAskModal] = useState(false);
  const [bugReport, setBugReport] = useState("");

  const { mutate: bugReportMutate } = useBugReport({
    closeModal: () => setShowAskModal(false),
  });

  const navigation = useNavigate();

  const onBugSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    bugReportMutate(bugReport);
  };

  return (
    <S.Container>
      {!isDDay && <GiftCount />}
      {!isDDay && (
        <S.Wrapper>
          {isMyRoom && (
            <RoomSettingIcon onClick={() => navigation("/select")} />
          )}
          <AskIcon onClick={() => setShowAskModal(true)} />
          <InformationIcon onClick={() => setShowTooltip((prev) => !prev)} />
          {showTooltip && <S.Tooltip>{TOOLTIP_TEXT}</S.Tooltip>}
        </S.Wrapper>
      )}
      {isDDay && toggle}
      {showAskModal && (
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
      )}
    </S.Container>
  );
}
