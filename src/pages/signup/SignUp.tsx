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
      <div>
        <p>이메일</p>
        <input {...register("email", { required: "필수 입력" })} />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <p>닉네임</p>
        <input {...register("nickname", { required: "필수 입력" })} />
        <p>{errors.nickname?.message}</p>
      </div>
      <div>
        <p>비밀번호</p>
        <input {...register("password", { required: "필수 입력" })} />
        <p>{errors.password?.message}</p>
      </div>
      <div>
        <p>비밀번호 확인</p>
        <input {...register("passwordCheck", { required: "필수 입력" })} />
        <p>{errors.passwordCheck?.message}</p>
      </div>
      <button>회원가입</button>
    </S.SignUpWrapper>
  );
};

export default Signup;
