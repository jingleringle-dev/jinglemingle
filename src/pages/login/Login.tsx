import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { AccountInput } from "components";
import { useLogin } from "services";
import type { loginType } from "types";
import * as S from "./Login.styled";

const Login = () => {
  const navigate = useNavigate();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<loginType>({ defaultValues: { email: "", password: "" } });

  const { mutate: loginMutate } = useLogin();

  const handleLogin = (data: loginType) => {
    const req = {
      email: data.email,
      password: data.password,
    };

    loginMutate(req, {
      onSuccess: () => {
        return navigate(`/room/${localStorage.getItem("userId")}`);
      },
    });
  };

  const loginHandler = () => {
    const KAKAO_REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
    const KAKAO_REDIRECT_URI = import.meta.env.VITE_REDIRECT_KEY;

    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <S.Title>타이틀!</S.Title>
      <S.ContentWrapper>
        <p>이메일</p>
        <AccountInput
          $hasError={!!errors.email?.message}
          errorMsg={errors.email?.message}
          register={register("email", { required: "이메일을 입력해주세요" })}
        />
      </S.ContentWrapper>
      <S.ContentWrapper>
        <p>비밀번호</p>
        <AccountInput
          type="password"
          $hasError={!!errors.password?.message}
          errorMsg={errors.password?.message}
          register={register("password", {
            required: "비밀번호를 입력해주세요",
          })}
        />
      </S.ContentWrapper>
      <S.ButtonWrapper>
        <S.LoginBtn disabled={!!Object.keys(errors).length}>로그인</S.LoginBtn>
        <S.KakaoLoginBtn type="button" onClick={loginHandler}>
          카카오톡 로그인
        </S.KakaoLoginBtn>
        <S.SignupLink to="/signup">아직 계정이 없어요!</S.SignupLink>
      </S.ButtonWrapper>
    </form>
  );
};

export default Login;
