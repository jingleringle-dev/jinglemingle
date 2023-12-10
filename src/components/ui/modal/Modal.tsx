import React, { Dispatch, SetStateAction } from "react";
import ReactDOM from "react-dom";
import * as S from "./Modal.styled";

interface Props {
  children: React.ReactNode;
  setModal: Dispatch<SetStateAction<boolean>>;
}
const modalRoot = document.getElementById("modal");
export default function Modal({ children, setModal }: Props) {
  const onCloseModalHandler = () => setModal(false);
  return ReactDOM.createPortal(
    <S.ModalBackground onClick={onCloseModalHandler}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </S.ModalBackground>,
    modalRoot as HTMLElement
  );
}
