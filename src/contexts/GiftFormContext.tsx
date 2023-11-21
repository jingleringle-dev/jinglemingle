import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import { createContext } from "react";

type GiftData = {
  boxcolor: string;
  linecolor: string;
  message: string;
  writer: string;
};
const initialData = {
  boxcolor: "",
  linecolor: "",
  message: "",
  writer: "",
};
type GiftContext = {
  giftData: GiftData;
  setGiftData: Dispatch<SetStateAction<GiftData>>;
};

const GiftFormContext = createContext<GiftContext>({
  giftData: initialData,
  setGiftData: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const GiftFormProvider = ({ children }: Props) => {
  const [giftData, setGiftData] = useState<GiftData>(initialData);

  return (
    <GiftFormContext.Provider value={{ giftData, setGiftData }}>
      {children}
    </GiftFormContext.Provider>
  );
};

export const useGiftForm = () => useContext(GiftFormContext);