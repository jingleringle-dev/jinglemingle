import { ax } from "./axios";

import type { SignupType, loginType } from "types";

export const signupAPI = async (req: SignupType) => {
  const { data } = await ax.post("/signup", {
    email: req.email,
    nickname: req.nickname,
    password: req.password,
    passwordCheck: req.passwordCheck,
  });

  return data;
};

export const loginAPI = async (req: loginType) => {
  const { data } = await ax.post("/login", {
    email: req.email,
    password: req.password,
  });

  return data;
};
