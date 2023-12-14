import React, { useEffect, useState } from "react";
import * as S from "./GiftList.styled";
import { GiftBox } from "../giftBox";
import { useGetMessageList } from "services/room";
import { useParams } from "react-router-dom";
import { Pagination } from "./pagination";
import { Message, Modal } from "components";
import { ListType, SimpleMessageType } from "types";

const DEFAULT_PAGE = 1;
const GIFT_BOX_HEIGHT = 95;
const GIFT_BOX_WIDTH = 105;

interface Props {
  dateChecker: (date: string) => void;
  roomNameChanger: (roomOwner: string) => void;
  giftCount: (count: number) => void;
}
export default function GiftList({
  dateChecker,
  roomNameChanger,
  giftCount,
}: Props) {
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [messageData, setMessageData] = useState<SimpleMessageType>();
  const { id } = useParams();

  const { data, isLoading, isError } = useGetMessageList({
    userId: id!,
    page,
  });

  const onClickGiftHandler = (message: SimpleMessageType) => {
    setMessageData(message);
    setIsOpenModal(true);
  };
  useEffect(() => {
    if (data) {
      dateChecker(data.timestamp);
      roomNameChanger(data.data.roomOwner);
      giftCount(data.data.messages.totalElements);
    }
  }, [data]);

  if (isLoading) {
    /* 로딩처리 */
    return <div>isLoading..</div>;
  }
  if (isError) {
    /* 에러처리 */
    return <div>isError...</div>;
  }

  return (
    <S.Container>
      <S.UnOrderedList>
        {data.data.messages.list.map((data: ListType) => {
          const { message, writer, boxColor, lineColor, messageId } = data;
          return (
            <GiftBox
              key={messageId}
              onClick={() =>
                onClickGiftHandler({
                  message,
                  writer,
                })
              }
              boxColor={boxColor}
              lineColor={lineColor}
              nickname={writer}
              width={GIFT_BOX_WIDTH}
              height={GIFT_BOX_HEIGHT}
            />
          );
        })}
      </S.UnOrderedList>

      <Pagination
        page={page}
        lastPage={
          data.data.messages.totalPages === 0
            ? 1
            : data.data.messages.totalPages
        }
        setPage={setPage}
      />
      {isOpenModal && (
        <Modal setModal={setIsOpenModal}>
          <Message
            setModal={setIsOpenModal}
            messageData={messageData}
            closeButton
          />
        </Modal>
      )}
    </S.Container>
  );
}
