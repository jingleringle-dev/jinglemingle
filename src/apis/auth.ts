import { ax } from "./axios";

import type {
  SignupType,
  changePasswordType,
  kakaoLoginType,
  loginType,
  postVerificationType,
  selectRoomType,
  sendVerifyEmailType,
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

export const changeNicknameAPI = async (req: string) => {
  const data = await ax.patch(`/users/nickname?nickname=${req}`);
};

export const sendVerifyEmailAPI = async (req: sendVerifyEmailType) => {
  const data = await ax.post(`/users/password/email?username=${req.username}`);

  return data;
};

export const checkAuthcodeAPI = async (req: postVerificationType) => {
  const data = await ax.post(
    `/users/password/verification?username=${req.username}&authCode=${req.authCode}`
  );

  return data;
};

export const passwordChangeAPI = async (req: changePasswordType) => {
  const { data } = await ax.patch("/users/password", req.body);

  return data;
};
