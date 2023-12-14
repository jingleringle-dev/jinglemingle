import React, { useState } from "react";
import * as S from "./Room.styled";
import { RoomHeader, TopMenu, GiftList } from "../room";
import { RoomLayout } from "components/layout/roomLayout";
import { InfiniteGiftList, ToggleButton } from "components";
import Button from "components/ui/button/Button";
import useCheckRoom from "hooks/useCheckRoom";
import { dateChecker, shareCurrentUrl } from "utils/room";
import { useNavigate, useParams } from "react-router-dom";

const INITIAL_HEADER = "산타";

export default function Room() {
  const [isDDay, setIsDDay] = useState(true);
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [nickname, setNickname] = useState(INITIAL_HEADER);
  const [count, setCount] = useState(0);

  const { authCheck } = useCheckRoom();
  const { id } = useParams();
  const navigation = useNavigate();

  const toggleUI = ToggleButton({ isToggleOn, setIsToggleOn });

  const roomNameChanger = (roomOwner: string) => {
    setNickname(roomOwner);
  };

  const giftCount = (count: number) => {
    setCount(count);
  };

  return (
    <RoomLayout opacity>
      <RoomHeader nickname={nickname} />
      <S.Body>
        <TopMenu
          count={count}
          isDDay={isDDay}
          toggle={toggleUI}
          isMyRoom={authCheck === "myRoom"}
        />
        {isToggleOn ? (
          <InfiniteGiftList />
        ) : (
          <GiftList
            dateChecker={(date) => dateChecker(date, setIsDDay)}
            roomNameChanger={roomNameChanger}
            giftCount={giftCount}
          />
        )}
      </S.Body>
      {!isDDay && (
        <S.ButtonWrap>
          {authCheck === "myRoom" && (
            <Button width="310px" height="45px" onClick={shareCurrentUrl}>
              방 링크 공유하기
            </Button>
          )}
          {(authCheck === "othersRoom" || authCheck === "notLoggedIn") && (
            <Button
              width="310px"
              height="45px"
              color="main_green"
              onClick={() =>
                navigation(`/room/add/${id!}`, { state: nickname })
              }
            >
              선물 줄게!
            </Button>
          )}
          {authCheck === "notLoggedIn" && (
            <Button
              width="310px"
              height="45px"
              onClick={() => navigation("/login")}
            >
              나도 방 만들래!
            </Button>
          )}
        </S.ButtonWrap>
      )}
    </RoomLayout>
  );
}
