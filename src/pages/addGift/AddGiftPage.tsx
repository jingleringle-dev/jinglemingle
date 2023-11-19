import GiftForm from "components/domain/giftForm/GiftForm";
import { GiftFormProvider } from "contexts/GiftFormContext";
import React from "react";

export default function AddGiftPage() {
  return (
    <GiftFormProvider>
      <GiftForm />
    </GiftFormProvider>
  );
}
