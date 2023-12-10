import React, { Dispatch, SetStateAction } from "react";
import * as S from "./Pagenation.styled";

interface Props {
  page: number;
  lastPage: number;
  setPage: Dispatch<SetStateAction<number>>;
}
export default function Pagination({ page, lastPage, setPage }: Props) {
  const onClickPageHandler = (plus: boolean) => {
    if (plus && page < lastPage) {
      setPage((prev) => prev + 1);
    }
    if (!plus && page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <S.Container>
      <S.Button onClick={() => onClickPageHandler(false)}>{`<`}</S.Button>
      <S.PageNo>{`${page} / ${lastPage}`}</S.PageNo>
      <S.Button onClick={() => onClickPageHandler(true)}>{`>`}</S.Button>
    </S.Container>
  );
}
