import React from "react";

import { GiftForm } from "components";
import { GiftFormProvider } from "contexts/GiftFormContext";

export default function AddGiftPage() {
  return (
    <GiftFormProvider>
      <GiftForm />
    </GiftFormProvider>
  );
}
