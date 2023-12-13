export interface SignupType {
  email: string;
  password: string;
  passwordCheck: string;
  nickname: string;
}

export interface loginType {
  email: string;
  password: string;
}

export interface selectRoomType {
  roomTemplateId: number;
  userId: string;
}

export interface kakaoLoginType {
  code: string;
}

export interface changePasswordType {
  body: {
    username: string;
    authCode: string;
    password: string;
    passwordCheck: string;
  };
}

export interface changePasswordForm {
  username: string;
  authCode: string;
  password: string;
  passwordCheck: string;
  authCodeCheck: boolean;
}

export interface sendVerifyEmailType {
  username: string;
}

export interface postVerificationType {
  username: string;
  authCode: string;
}
