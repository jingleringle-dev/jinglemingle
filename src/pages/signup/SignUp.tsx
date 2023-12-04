import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useLogin, useSignup } from "services";
import type { SignupType } from "types";
import * as S from "./SignUp.styled";

const Signup = () => {
  const navigate = useNavigate();

  const {
    watch,
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignupType>({
    defaultValues: {
      email: "",
      nickname: "",
      password: "",
      passwordCheck: "",
    },
  });

  const { mutate: signupMutate } = useSignup();
  const { mutate: loginMutate } = useLogin();

  const handleSignUp = (data: SignupType) => {
    const req = {
      email: data.email,
      nickname: data.nickname,
      password: data.password,
      passwordCheck: data.passwordCheck,
    };

    signupMutate(req, {
      onSuccess: () => {
        loginMutate({ email: req.email, password: req.password });
        navigate("/select");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
      <S.Title>타이틀!!!!!</S.Title>
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
        <p>닉네임</p>
        <S.InputWrapper $hasError={!!errors.nickname?.message}>
          <input
            {...register("nickname", { required: "닉네임을 작성해주세요" })}
          />
          {errors.nickname?.message && <span>{errors.nickname?.message}</span>}
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
      <S.ContentWrapper>
        <p>비밀번호 확인</p>
        <S.InputWrapper $hasError={!!errors.passwordCheck?.message}>
          <input
            {...register("passwordCheck", {
              required: "비밀번호를 확인해주세요",
            })}
          />
          {errors.passwordCheck?.message && (
            <span>{errors.passwordCheck?.message}</span>
          )}
        </S.InputWrapper>
      </S.ContentWrapper>
      <S.SignupBtn disabled={!!Object.keys(errors).length}>
        방 선택하러 가기
      </S.SignupBtn>
    </form>
  );
};

export default Signup;
