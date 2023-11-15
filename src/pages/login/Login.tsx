import React from "react";
import { useForm } from "react-hook-form";

import { useLogin } from "services";
import type { loginType } from "types";
import * as S from "./styled";

const Login = () => {
  const {
    watch,
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
      onSuccess: () => console.log("success"),
    });
  };

  return (
    <S.LoginWrapper onSubmit={handleSubmit(handleLogin)}>
      <S.Title>타이틀!</S.Title>
      <S.ContentWrapper>
        <p>이메일</p>
        <S.InputWrapper hasError={!!errors.email?.message}>
          <input {...register("email", { required: "필수 입력" })} />
          {errors.email?.message && <span>{errors.email?.message}</span>}
        </S.InputWrapper>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <p>비밀번호</p>
        <S.InputWrapper hasError={!!errors.password?.message}>
          <input {...register("password", { required: "필수 입력" })} />
          {errors.password?.message && <span>{errors.password?.message}</span>}
        </S.InputWrapper>
      </S.ContentWrapper>
      <S.LoginBtn>로그인</S.LoginBtn>
      <S.KakaoLoginBtn type="button">카카오톡 로그인</S.KakaoLoginBtn>
    </S.LoginWrapper>
  );
};

export default Login;
