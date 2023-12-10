import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { AccountInput } from "components";
import { useLogin } from "services";
import type { loginType } from "types";
import * as S from "./Login.styled";
import { ax } from "apis/axios";
import { oAuthAPI } from "apis";

const Login = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<loginType>({ defaultValues: { email: "", password: "" } });

  const KAKAO_REST_API_KEY = import.meta.env.CLIENT_ID;
  const KAKAO_REDIRECT_URI = import.meta.env.SECRET_KEY;
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

  const code = new URL(window.location.href).searchParams.get("code");

  console.log(code);

  const { mutate: loginMutate } = useLogin();

  const handleLogin = (data: loginType) => {
    const req = {
      email: data.email,
      password: data.password,
    };

    loginMutate(req, {
      onSuccess: (res) => {
        const id = res.data.data.userId;

        return navigate(`/room/${id}`);
      },
    });
  };

  const loginHandler = () => {
    window.location.href = `${
      import.meta.env.VITE_AXIOS_API
    }/oauth2/authorization/kakao`;
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
