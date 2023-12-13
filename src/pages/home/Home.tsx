import React from "react";
import * as S from "./Home.styled";

const Home = () => {
  const loginHandler = () => {
    const KAKAO_REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
    const KAKAO_REDIRECT_URI = import.meta.env.VITE_REDIRECT_KEY;

    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
  };
  return (
    <S.HomeWrapper>
      <S.LoginLink to="login">로그인</S.LoginLink>
      <S.LoginLink to="signup">회원가입</S.LoginLink>
      <S.KakaoLoginBtn type="button" onClick={loginHandler}>
        카카오톡 로그인
      </S.KakaoLoginBtn>
    </S.HomeWrapper>
  );
};

export default Home;
