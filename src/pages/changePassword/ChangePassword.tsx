import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { AccountInput } from "components";
import {
  usePasswordChange,
  usePostAuthcodeCheck,
  useSendVerifyEmail,
} from "services";
import type { changePasswordForm } from "types";
import * as S from "./ChangePassword.styled";

const ChangePassword = () => {
  const navigate = useNavigate();

  const [isSendMail, setIsSendMail] = useState(false);

  const {
    watch,
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<changePasswordForm>({
    defaultValues: {
      username: "",
      authCode: "",
      authCodeCheck: false,
      password: "",
      passwordCheck: "",
    },
  });

  const { mutate: sendVerifyEmailMutate, isPending: isLoadingSendVerifyEmail } =
    useSendVerifyEmail();
  const { mutate: authcodeCheckMutate, isSuccess: isSuccessAuthcodeCheck } =
    usePostAuthcodeCheck();
  const { mutate: passwordChangeMutate } = usePasswordChange();

  const handleEmailSend = () => {
    sendVerifyEmailMutate(
      { username: watch("username") },
      {
        onSuccess: () => {
          setIsSendMail(!isSendMail);
          console.log(watch("username"), "data");
        },
      }
    );
  };

  const handleAuthcodeCheck = () => {
    authcodeCheckMutate({
      username: watch("username"),
      authCode: watch("authCode"),
    });
  };

  const handlePasswordChange = handleSubmit((data) => {
    const req = {
      body: {
        username: data.username,
        authCode: data.authCode,
        password: data.password,
        passwordCheck: data.passwordCheck,
      },
    };
    passwordChangeMutate(req, {
      onSuccess: () => {
        navigate("/login");
      },
    });
  });

  return (
    <form onSubmit={handlePasswordChange}>
      <S.Title>징글 밍글</S.Title>
      {!isSendMail ? (
        <S.VerifyWrapper>
          <AccountInput
            label="이메일"
            placeholder="사용하셨던 이메일을 입력해주세요"
            $hasError={!!errors.username?.message}
            errorMsg={errors.username?.message}
            register={register("username", {
              required: "이메일을 입력해주세요",
            })}
          />
          <S.SendMailBtn
            type="button"
            $hasError={!!errors.username?.message}
            disabled={!watch("username") || isLoadingSendVerifyEmail}
            onClick={handleEmailSend}
          >
            {!isLoadingSendVerifyEmail
              ? "인증번호 받기"
              : "잠시만 기다려주세요 :D"}
          </S.SendMailBtn>
        </S.VerifyWrapper>
      ) : (
        <S.AuthcodeWrapper>
          <AccountInput
            label="인증코드 입력"
            placeholder="인증코드를 입력해주세요"
            $hasError={!!errors.authCode?.message}
            errorMsg={errors.authCode?.message}
            register={register("authCode", {
              required: "인증코드를 입력해주세요",
            })}
          />
          <S.VerifyAuthcodeBtn
            type="button"
            $hasError={!!errors.authCode?.message}
            disabled={!watch("authCode") || isSuccessAuthcodeCheck}
            onClick={handleAuthcodeCheck}
          >
            {!isSuccessAuthcodeCheck ? "인증번호 확인" : "인증 완료"}
          </S.VerifyAuthcodeBtn>
        </S.AuthcodeWrapper>
      )}
      <S.ContentWrapper>
        <AccountInput
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요"
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
          placeholder="비밀번호를 확인해주세요"
          $hasError={!!errors.passwordCheck?.message}
          errorMsg={errors.passwordCheck?.message}
          register={register("passwordCheck", {
            required: "비밀번호를 확인해주세요",
          })}
        />
      </S.ContentWrapper>
      <S.ButtonWrapper>
        <S.SignupBtn type="submit" disabled={!!Object.keys(errors).length}>
          비밀번호 변경하기
        </S.SignupBtn>
        <S.MainLink to="/">메인 화면으로 이동</S.MainLink>
      </S.ButtonWrapper>
    </form>
  );
};

export default ChangePassword;
