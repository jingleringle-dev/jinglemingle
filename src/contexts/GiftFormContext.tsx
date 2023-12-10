import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import { createContext } from "react";
import { MessageType } from "types/room";

const initialData = {
  boxColor: "",
  lineColor: "",
  message: "",
  writer: "",
};
type GiftContext = {
  giftData: MessageType;
  setGiftData: Dispatch<SetStateAction<MessageType>>;
};

const GiftFormContext = createContext<GiftContext>({
  giftData: initialData,
  setGiftData: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const GiftFormProvider = ({ children }: Props) => {
  const [giftData, setGiftData] = useState<MessageType>(initialData);

  return (
    <GiftFormContext.Provider value={{ giftData, setGiftData }}>
      {children}
    </GiftFormContext.Provider>
  );
};

export const useGiftForm = () => useContext(GiftFormContext);
