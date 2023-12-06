import React, { useState } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

import { LockIcon, OpenLockIcon } from "assets";
import * as S from "./AccountInput.styled";

interface AccountInputProps {
  className?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
  $hasError?: boolean;
  errorMsg?: string;
  register: UseFormRegisterReturn<string>;
}

const AccountInput = ({
  className,
  type,
  placeholder,
  maxLength,
  disabled,
  $hasError,
  errorMsg,
  register,
}: AccountInputProps) => {
  const [showPaasowrd, setShowPassword] = useState(false);

  return (
    <S.InputWrapper $hasError={$hasError}>
      <S.Input
        className={className}
        type={type !== "password" ? type : showPaasowrd ? "text" : "password"}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        $hasError={$hasError}
        autoComplete="off"
        {...register}
      />
      {type === "password" && (
        <button type="button" onClick={() => setShowPassword(!showPaasowrd)}>
          {showPaasowrd ? <OpenLockIcon /> : <LockIcon />}
        </button>
      )}
      {errorMsg && <span>{errorMsg}</span>}
    </S.InputWrapper>
  );
};

export default AccountInput;
