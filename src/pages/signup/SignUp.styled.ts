import styled, { css } from "styled-components";

export const Title = styled.h2`
  ${({ theme }) => css`
    margin-bottom: 60px;
    color: ${theme.colors.main_brown};
    font-size: 2em;
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

export const InputWrapper = styled.div<{ $hasError: boolean }>`
  ${({ theme, $hasError }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 5px;
    margin-bottom: ${$hasError ? "10px" : "12px"};

    & > input {
      width: 180px;
      height: 36px;
      border: ${$hasError && `1px solid ${theme.colors.main_red}`};
    }

    & > span {
      height: fit-content;
      color: ${$hasError && theme.colors.main_red};
      font-size: 0.7em;
    }
  `}
`;

export const SignupBtn = styled.button`
  ${({ theme }) => css`
    width: 280px;
    height: 36px;
    margin-top: 50px;
    background-color: ${theme.colors.main_red};
    color: ${theme.colors.white};

    &:disabled {
      margin-top: 10px;
      background-color: ${theme.colors.disabled_red};
      cursor: not-allowed;
    }
  `}
`;
