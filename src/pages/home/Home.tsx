import React from "react";
import * as S from "./Home.styled";

const Home = () => {
  return (
    <S.HomWrapper>
      <S.LoginLink to="login">로그인</S.LoginLink>
      <S.LoginLink to="signup">회원가입</S.LoginLink>
    </S.HomWrapper>
  );
};

export default Home;
