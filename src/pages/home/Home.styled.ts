import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const HomWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("public/bg_01.png");

    & > a:last-of-type {
      margin-bottom: 4em;
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

export const LoginLink = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20.5em;
    height: 3em;
    margin-bottom: 10px;
    background-color: ${theme.colors.main_beige};
    color: ${theme.colors.main_kaki};
  `}
`;
