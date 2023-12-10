import React from "react";
import * as S from "./InfiniteGiftList.styled";
import InfiniteScroll from "react-infinite-scroller";
import { useGetInfiniteMessageList } from "services/room";
import { useParams } from "react-router-dom";
import { MessageType } from "types";
import { Message } from "..";

export default function InfiniteGiftList() {
  const { id } = useParams();
  const { data, isLoading, fetchNextPage, hasNextPage, isFetching } =
    useGetInfiniteMessageList(id!);

  if (isLoading) {
    return <div>isLoading...</div>;
  }
  if (isFetching) {
    return <div>loading...</div>;
  }

  return (
    <S.Container>
      <InfiniteScroll
        loadMore={() => fetchNextPage()}
        hasMore={hasNextPage}
        style={{ width: "100%", height: "100%", overflowY: "scroll" }}
      >
        {data?.pages.map((page) =>
          page.data.messages.list.map((message: MessageType) => {
            return <Message key={message.messageId} messageData={message} />;
          })
        )}
      </InfiniteScroll>
    </S.Container>
  );
}
