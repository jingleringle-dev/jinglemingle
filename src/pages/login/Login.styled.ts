import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Title = styled.h2`
  ${({ theme }) => css`
    margin-bottom: 40px;
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

export const LoginBtn = styled.button`
  ${({ theme }) => css`
    width: 250px;
    height: 36px;
    margin-bottom: 10px;
    background-color: ${theme.colors.main_red};
    color: ${theme.colors.white};

    &:disabled {
      background-color: ${theme.colors.disabled_red};
      cursor: not-allowed;
    }
  `}
`;

export const SignupLink = styled(Link)`
  margin-top: 20px;
  font-size: 0.8em;
  text-align: center;
  text-decoration: underline;

  &:last-of-type {
    margin-top: 14px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
`;
