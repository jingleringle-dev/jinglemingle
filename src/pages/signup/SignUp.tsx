import React from "react";
import { useForm } from "react-hook-form";

import { useSignup } from "services";
import type { SignupType } from "types";
import * as S from "./styled";

const Signup = () => {
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

  const handleSignUp = (data: SignupType) => {
    const req = {
      email: data.email,
      nickname: data.nickname,
      password: data.password,
      passwordCheck: data.passwordCheck,
    };

    signupMutate(req, {
      onSuccess: () => console.log("success"),
    });
  };

  return (
    <S.SignUpWrapper onSubmit={handleSubmit(handleSignUp)}>
      <S.Title>타이틀!!!!!</S.Title>
      <S.ContentWrapper>
        <p>이메일</p>
        <S.InputWrapper hasError={!!errors.email?.message}>
          <input {...register("email", { required: "필수 입력" })} />
          {errors.email?.message && <span>{errors.email?.message}</span>}
        </S.InputWrapper>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <p>닉네임</p>
        <S.InputWrapper hasError={!!errors.nickname?.message}>
          <input {...register("nickname", { required: "필수 입력" })} />
          {errors.nickname?.message && <span>{errors.nickname?.message}</span>}
        </S.InputWrapper>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <p>비밀번호</p>
        <S.InputWrapper hasError={!!errors.password?.message}>
          <input {...register("password", { required: "필수 입력" })} />
          {errors.password?.message && <span>{errors.password?.message}</span>}
        </S.InputWrapper>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <p>비밀번호 확인</p>
        <S.InputWrapper hasError={!!errors.passwordCheck?.message}>
          <input {...register("passwordCheck", { required: "필수 입력" })} />
          {errors.passwordCheck?.message && (
            <span>{errors.passwordCheck?.message}</span>
          )}
        </S.InputWrapper>
      </S.ContentWrapper>
      <S.SignupBtn>회원가입</S.SignupBtn>
    </S.SignUpWrapper>
  );
};

export default Signup;
