import { ax } from "./axios";

import type {
  SignupType,
  kakaoLoginType,
  loginType,
  selectRoomType,
} from "types";

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
  const data = await ax.post("/login", {
    email: req.email,
    password: req.password,
  });

  return data;
};

export const selectRoomAPI = async (req: selectRoomType) => {
  const data = await ax.patch(
    `/room/template?roomTemplateId=${req.roomTemplateId}`,
    { userId: req.userId }
  );

  return data;
};

export const kakaoLoginAPI = async (req: kakaoLoginType) => {
  const data = await ax.get(`/kakao/callback`, { params: req });

  return data;
};
