import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { addMessageAPI, bugReportAPI, getMessageListAPI } from "apis/room";
import { MessageType } from "types";

interface GetMessageListProps {
  userId: string;
  page: number;
}

export const useGetMessageList = ({ userId, page }: GetMessageListProps) => {
  return useQuery({
    queryKey: ["messageList", page],
    queryFn: () => getMessageListAPI(userId, page),
  });
};

export const useGetInfiniteMessageList = (userId: string) => {
  return useInfiniteQuery({
    queryKey: ["infiniteMessageList"],
    queryFn: ({ pageParam = 1 }) => getMessageListAPI(userId, pageParam),
    getNextPageParam: (lastPage) => {
      if (lastPage.data.totalPages > lastPage.data.pageNo)
        return lastPage.data.pageNo + 1;
      else return undefined;
    },
    initialPageParam: undefined,
  });
};

export const useAddMessage = () => {
  return useMutation({
    mutationFn: (req: { userId: string; messageData: MessageType }) =>
      addMessageAPI(req),
    onError: (err) => {
      console.error("선물 추가 실패 :", err);
    },
  });
};

interface BugReportProps {
  closeModal: () => void;
}
export const useBugReport = ({ closeModal }: BugReportProps) => {
  return useMutation({
    mutationFn: (req: string) => bugReportAPI(req),
    onError: (err) => {
      alert("버그 신고에 실패하였습니다.");
      console.error("버그 신고 실패 :", err);
    },
    onSuccess: () => {
      alert("버그가 신고되었습니다.");
      closeModal();
    },
  });
};
