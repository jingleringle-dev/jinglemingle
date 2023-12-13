import { useMutation, useQuery } from "@tanstack/react-query";

import {
  checkAuthcodeAPI,
  kakaoLoginAPI,
  loginAPI,
  passwordChangeAPI,
  selectRoomAPI,
  sendVerifyEmailAPI,
  signupAPI,
} from "apis";
import { cookies, setCookies } from "utils";
import type {
  SignupType,
  changePasswordType,
  kakaoLoginType,
  loginType,
  postVerificationType,
  selectRoomType,
  sendVerifyEmailType,
} from "types";

export const useSignup = () => {
  return useMutation({
    mutationFn: (req: SignupType) => signupAPI(req),
    onSuccess: (res) => {
      setCookies("COOKIES", res.headers);
    },
    onError: (err: any) => {
      //NOTE: 타입 수정 예정
      console.log(err.response.data.message);
    },
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (req: loginType) => loginAPI(req),
    onSuccess: (res) => {
      setCookies("COOKIES", res.headers);
      console.log(res); //TODO: 확인후 필요한 cookies만 남길것
      localStorage.setItem("access_token", res.headers.access_token);
      localStorage.setItem("refresh_token", res.headers.refresh_token);
      localStorage.setItem("userId", res.data.data.userId);
    },
    onError: (err: any) => {
      //NOTE: 타입 수정 예정
      console.log(err.response.data.message);
    },
  });
};

export const useKaKaoLogin = (req: kakaoLoginType) => {
  return useQuery({
    queryKey: ["login"],
    queryFn: () => kakaoLoginAPI(req),
  });
};

export const useSelectRoom = () => {
  return useMutation({
    mutationFn: (req: selectRoomType) => selectRoomAPI(req),
  });
};

export const useSendVerifyEmail = () => {
  return useMutation({
    mutationFn: (req: sendVerifyEmailType) => sendVerifyEmailAPI(req),
  });
};

export const usePostAuthcodeCheck = () => {
  return useMutation({
    mutationFn: (req: postVerificationType) => checkAuthcodeAPI(req),
  });
};

export const usePasswordChange = () => {
  return useMutation({
    mutationFn: (req: changePasswordType) => passwordChangeAPI(req),
    onSuccess: (res) => {
      setCookies("COOKIES", res.headers);
    },
    onError: (err: any) => {
      //NOTE: 타입 수정 예정
      console.log(err.response.data.message);
    },
  });
};
