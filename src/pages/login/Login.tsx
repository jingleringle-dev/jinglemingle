import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useLogin } from "services";
import type { loginType } from "types";
import * as S from "./Login.styled";

const Login = () => {
  const navigate = useNavigate();
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
      onSuccess: (res) => {
        const id = res.data.data.userId;

        return navigate(`/room/${id}`);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <S.Title>타이틀!</S.Title>
      <S.ContentWrapper>
        <p>이메일</p>
        <S.InputWrapper $hasError={!!errors.email?.message}>
          <input
            {...register("email", { required: "이메일을 입력해주세요" })}
          />
          {errors.email?.message && <span>{errors.email?.message}</span>}
        </S.InputWrapper>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <p>비밀번호</p>
        <S.InputWrapper $hasError={!!errors.password?.message}>
          <input
            {...register("password", { required: "비밀번호를 입력해주세요" })}
          />
          {errors.password?.message && <span>{errors.password?.message}</span>}
        </S.InputWrapper>
      </S.ContentWrapper>
      <S.ButtonWrapper>
        <S.LoginBtn disabled={!!Object.keys(errors).length}>로그인</S.LoginBtn>
        <S.KakaoLoginBtn type="button">카카오톡 로그인</S.KakaoLoginBtn>
        <S.SignupLink to="/signup">아직 계정이 없어요!</S.SignupLink>
      </S.ButtonWrapper>
    </form>
  );
};

export default Login;
