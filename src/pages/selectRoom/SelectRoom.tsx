import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  LeftArrowIcon,
  RightArrowIcon,
  selectRoom01Img,
  selectRoom02Img,
  selectRoom03Img,
} from "assets";
import { useSelectRoom } from "services";
import * as S from "./SelectRoom.styled";

const SelectRoom = () => {
  const navigate = useNavigate();
  const [idx, setIdx] = useState(0);

  const { mutate: selectRoomMutate } = useSelectRoom();

  const carouselRef = useRef<HTMLUListElement>(null);
  const rooms = [selectRoom01Img, selectRoom02Img, selectRoom03Img];

  const handleSwipe = (direction: number) => {
    const newIndex = (idx + direction + rooms.length) % rooms.length;
    setIdx(newIndex);
  };

  const handleSubmitRoom = () => {
    selectRoomMutate(
      {
        roomTemplateId: idx,
        userId: localStorage.getItem("userId")!,
      },
      {
        onSuccess: (res) => {
          const id = res.config.data.userId;

          navigate(`/room/${id}`);
        },
        onError: (err: any) => console.log(err),
      }
    );
  };

  useEffect(() => {
    //TODO: 버벅임 이슈 수정 필요
    if (carouselRef.current !== null) {
      carouselRef.current.style.transform = `translateX(-${idx}00%)`;
    }
  }, [idx]);

  return (
    <S.Wrapper>
      <S.Title>타이틀 ^ㅇ^</S.Title>
      <S.SelectRoomWrapper>
        <button type="button" onClick={() => handleSwipe(-1)}>
          <LeftArrowIcon />
        </button>
        <S.UlWrapper>
          <S.Ul ref={carouselRef}>
            {rooms?.map((room, idx) => {
              return (
                <li key={idx}>
                  <S.Imgs src={room} />
                </li>
              );
            })}
          </S.Ul>
        </S.UlWrapper>
        <button type="button" onClick={() => handleSwipe(1)}>
          <RightArrowIcon />
        </button>
      </S.SelectRoomWrapper>
      <S.Info>방을 선택하지 않고 종료하면 임시 방으로 설정됩니다.</S.Info>
      <S.SelectRoomBtn onClick={handleSubmitRoom}>방 선택하기</S.SelectRoomBtn>
    </S.Wrapper>
  );
};

export default SelectRoom;
