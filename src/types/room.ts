export interface MessageType extends SimpleMessageType {
  boxColor: string;
  lineColor: string;
  messageId?: number;
}

export interface SimpleMessageType {
  message: string;
  writer: string;
}

export interface ListType extends MessageType {
  messageId: number;
}

export type AuthCheck = "myRoom" | "notLoggedIn" | "othersRoom";
