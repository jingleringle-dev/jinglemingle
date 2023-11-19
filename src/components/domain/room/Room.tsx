import React from "react";
import * as S from "./Room.styled";
import { RoomHeader } from "./header";
import { TopMenu } from "./topMenu";
import { GiftList } from "./giftList";

import Button from "components/ui/button/Button";
import { RoomLayout } from "components/layout/roomLayout";

export default function Room() {
  return (
    <RoomLayout opacity>
      <RoomHeader />
      <S.Body>
        <TopMenu />
        <GiftList />
      </S.Body>
      <S.ButtonWrap>
        <Button width="310px" height="45px">
          방 링크 공유하기
        </Button>
        <Button width="310px" height="45px" green>
          선물 줄게!
        </Button>
        <Button width="310px" height="45px">
          나도 방 만들래!
        </Button>
      </S.ButtonWrap>
    </RoomLayout>
  );
}
