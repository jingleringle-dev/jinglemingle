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

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <S.Title>징글 밍글</S.Title>
      <S.ContentWrapper>
        <AccountInput
          label="이메일"
          $hasError={!!errors.email?.message}
          errorMsg={errors.email?.message}
          register={register("email", { required: "이메일을 입력해주세요" })}
        />
      </S.ContentWrapper>
      <S.ContentWrapper>
        <AccountInput
          label="비밀번호"
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
        <S.SignupLink to="/changePassword">
          비밀번호를 까먹었어요 :(
        </S.SignupLink>
        <S.SignupLink to="/signup">아직 계정이 없어요!</S.SignupLink>
      </S.ButtonWrapper>
    </form>
  );
};

export default Login;
