import { useMutation } from "@tanstack/react-query";

import { loginAPI, signupAPI } from "apis";
import { setCookies } from "utils";
import type { SignupType, loginType } from "types";

export const useSignup = () => {
  return useMutation({ mutationFn: (req: SignupType) => signupAPI(req) });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (req: loginType) => loginAPI(req),
    onSuccess: (res) => {
      setCookies("COOKIES", res.headers);
    },
    onError: (err: any) => {
      //NOTE: 타입 수정 예정
      console.log(err.response.data.message);
    },
  });
};
