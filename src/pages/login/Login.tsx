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
      <div>
        <p>이메일</p>
        <input {...register("email", { required: "필수 입력" })} />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <p>비밀번호</p>
        <input {...register("password", { required: "필수 입력" })} />
        <p>{errors.password?.message}</p>
      </div>
      <button>로그인</button>
      <button type="button">카카오톡 로그인</button>
    </S.LoginWrapper>
  );
};

export default Login;
