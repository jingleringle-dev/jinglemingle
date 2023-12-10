import { MessageType } from "types";
import { ax } from "./axios";

const ITEM_COUNT = 9;

export const getMessageListAPI = async (userId: string, page: number) => {
  const accessToken = localStorage.getItem("access_token");
  const path = accessToken
    ? `/messages/${userId}?pageNo=${page}&pageSize=${ITEM_COUNT}`
    : `/messages/${userId}/guest?pageNo=${page}&pageSize=${ITEM_COUNT}`;

  const { data } = await ax.get(path);
  return data;
};

export const addMessageAPI = async ({
  userId,
  messageData,
}: {
  userId: string;
  messageData: MessageType;
}) => {
  const { data } = await ax.post(`/messages/${userId}`, messageData);

  return data;
};

export const hideMessageAPI = async (messageId: string) => {
  const { data } = await ax.patch(`/messages/${messageId}`);

  return data;
};

export const bugReportAPI = async (contents: string) => {
  const { data } = await ax.post("/bugs", { contents });
  console.log(data);
  return data;
};
