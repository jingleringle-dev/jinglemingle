import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { AccountInput } from "components";
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
          label="닉네임"
          $hasError={!!errors.nickname?.message}
          errorMsg={errors.nickname?.message}
          register={register("nickname", { required: "닉네임을 작성해주세요" })}
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
      <S.ContentWrapper>
        <AccountInput
          label="비밀번호 확인"
          type="password"
          $hasError={!!errors.passwordCheck?.message}
          errorMsg={errors.passwordCheck?.message}
          register={register("passwordCheck", {
            required: "비밀번호를 확인해주세요",
          })}
        />
      </S.ContentWrapper>
      <S.ButtonWrapper>
        <S.SignupBtn disabled={!!Object.keys(errors).length}>
          방 선택하러 가기
        </S.SignupBtn>
        <S.MainLink to="/">메인 화면으로 이동</S.MainLink>
      </S.ButtonWrapper>
    </form>
  );
};

export default Signup;
