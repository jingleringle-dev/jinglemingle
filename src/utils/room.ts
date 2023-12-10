import { Dispatch, SetStateAction } from "react";

export const dateChecker = (
  date: string,
  setState: Dispatch<SetStateAction<boolean>>
) => {
  const currentDate = new Date(date);
  /* 월 단위에 11을 넣어야 12월을 비교하게됨 (0~11) */
  const christmasDate = new Date(2023, 11, 25);
  setState(currentDate >= christmasDate);
};

export const shareCurrentUrl = () => {
  const currentURL = window.location.href;

  navigator.clipboard
    .writeText(currentURL)
    .then(() => {
      alert("URL이 복사되었습니다");
    })
    .catch((err) => {
      console.error("URL 복사 실패:", err);
    });
};
