import styled from "styled-components";

export const ModalBackground = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* 백그라운드는 개발단계에서 눈으로 보려고 만든 효과입니다. */
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
