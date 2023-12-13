import { AccountInput } from "components";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Title = styled.h2`
  ${({ theme }) => css`
    margin-bottom: 20px;
    color: ${theme.colors.main_brown};
    font-size: 3em;
    text-align: center;
  `}
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  height: fit-content;

  & > p {
    display: flex;
    align-self: flex-start;
    width: 80px;
    padding: 11px 0 6px;
    font-size: 0.8em;
  }

  &:last-of-type {
    margin-bottom: 10px;
  }
`;

export const VerifyWrapper = styled(ContentWrapper)`
  display: flex;
  flex-direction: column;
`;

export const AuthcodeWrapper = styled(ContentWrapper)`
  display: grid;
  grid-template-columns: 1fr 80px;

  & > div > input {
    width: 100%;
  }
`;

export const SendMailBtn = styled.button<{ $hasError?: boolean }>`
  ${({ theme, $hasError }) => css`
    width: 100%;
    margin-bottom: ${$hasError ? "5px" : "7px"};
    padding: 10px 10px;
    color: ${theme.colors.white};
    background-color: ${theme.colors.main_red};
    font-size: 0.8em;

    &:disabled {
      background-color: ${theme.colors.disabled_red};
    }
  `}
`;

export const VerifyAuthcodeBtn = styled.button<{
  $hasError?: boolean;
  isVerify?: boolean;
}>`
  ${({ theme, $hasError, isVerify }) => css`
    width: 100%;
    margin-top: 12px;
    padding: 10px 10px;
    color: ${theme.colors.white};
    background-color: ${theme.colors.main_red};
    font-size: 0.7em;

    &:disabled {
      background-color: ${theme.colors.disabled_red};
    }
  `}
`;

export const SignupBtn = styled.button`
  ${({ theme }) => css`
    height: 36px;
    background-color: ${theme.colors.main_red};
    color: ${theme.colors.white};
    font-size: 0.8em;

    &:disabled {
      background-color: ${theme.colors.disabled_red};
      cursor: not-allowed;
    }
  `}
`;

export const MainLink = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    margin-top: 10px;
    font-size: 0.8em;
    background-color: ${theme.colors.main_brown};
    color: ${theme.colors.white};
  `}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 250px;
  margin-top: 20px;
`;
