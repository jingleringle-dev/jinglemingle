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
