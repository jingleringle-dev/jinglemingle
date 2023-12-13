import React, { Dispatch, SetStateAction, useState } from "react";
import * as S from "./Sidebar.styled";
import {
  AskIcon,
  LoginIcon,
  LogoutIcon,
  PasswordIcon,
} from "components/ui/icons";
import { useNavigate } from "react-router-dom";
import Ask from "./ask/Ask";
import useCheckRoom from "hooks/useCheckRoom";

const INFO_TEXT = "선물은 25일부터 확인할 수 있어요";
const TITLE = "징글 밍글";
const LOGOUT = { title: "로그아웃", icon: <LogoutIcon /> };
const LOGIN = { title: "로그인/회원가입", icon: <LoginIcon /> };
const PASSWORD_CHANGE = { title: "비밀번호 변경하기", icon: <PasswordIcon /> };
const ASK = { title: "문의하기", icon: <AskIcon /> };

interface SidebarProps {
  isOpen: boolean;
  setIsOpenSidebar: Dispatch<SetStateAction<boolean>>;
}
export default function Sidebar({ isOpen, setIsOpenSidebar }: SidebarProps) {
  const [showAskModal, setShowAskModal] = useState(false);
  const navigation = useNavigate();
  const { authCheck } = useCheckRoom();
  return (
    <S.SidebarContainer isOpen={isOpen}>
      <S.Title>{TITLE}</S.Title>
      <S.Information>{INFO_TEXT}</S.Information>
      <S.MenuContainer>
        <MenuButton data={LOGIN} onClick={() => navigation("/login")} />
        <MenuButton
          data={LOGOUT}
          onClick={() => {
            localStorage.clear();
            navigation("/");
          }}
        />
        <MenuButton data={PASSWORD_CHANGE} onClick={() => {}} />
        {authCheck !== "notLoggedIn" && (
          <MenuButton
            data={ASK}
            onClick={() => {
              setShowAskModal(true);
              setIsOpenSidebar(false);
            }}
          />
        )}
      </S.MenuContainer>
      {showAskModal && <Ask setShowAskModal={setShowAskModal} />}
    </S.SidebarContainer>
  );
}

interface MenuButtonProps {
  data: Data;
  onClick: () => void;
}

interface Data {
  title: string;
  icon: React.ReactNode;
}
const MenuButton = ({ data: { title, icon }, onClick }: MenuButtonProps) => {
  return (
    <S.ButtonWrapper onClick={onClick}>
      <S.IconWrapper>{icon}</S.IconWrapper>
      <S.ButtonTitle>{title}</S.ButtonTitle>
    </S.ButtonWrapper>
  );
};
