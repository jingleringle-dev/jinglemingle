import styled, { css } from "styled-components";

export const SignUpWrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("public/bg_01.png");

    & > div,
    h2,
    button {
      z-index: 10;
    }

    &::before {
      content: "";
      width: 80%;
      height: 90%;
      opacity: 0.9;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      right: 0px;
      bottom: 0px;
      background-color: ${theme.colors.white};
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    margin-bottom: 1.2em;
    font-size: 2em;
    color: ${theme.colors.main_brown};
  `}
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5em;
    height: fit-content;

    & > p {
      display: flex;
      align-self: flex-start;
      width: 5.5em;
      padding: 0.8em 0;
      font-size: 0.8em;
    }

    &:last-of-type {
      margin-bottom: 2em;
    }
  `}
`;

export const InputWrapper = styled.div<{ hasError: boolean }>`
  ${({ theme, hasError }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 0.3em;
    margin-bottom: ${hasError ? "0.7em" : "1em"};

    & > input {
      width: 14em;
      height: 2.5em;
      border: ${hasError && `1px solid ${theme.colors.main_red}`};
    }

    & > span {
      height: fit-content;
      color: ${hasError && theme.colors.main_red};
      font-size: 0.8em;
    }
  `}
`;

export const SignupBtn = styled.button`
  ${({ theme }) => css`
    width: 20.5em;
    height: 3em;
    margin-bottom: 10px;
    background-color: ${theme.colors.main_red};
    color: ${theme.colors.white};
  `}
`;
