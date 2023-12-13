import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { homeBg01Img } from "assets";

export const HomeWrapper = styled.div`
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
    background-image: url(${homeBg01Img});
  `}
`;

export const LoginLink = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 36px;
    margin-bottom: 10px;
    background-color: ${theme.colors.main_beige};
    color: ${theme.colors.main_brown};
  `}
`;

export const KakaoLoginBtn = styled.button`
  ${({ theme }) => css`
    width: 250px;
    height: 36px;
    margin-bottom: 40px;
    background-color: ${theme.colors.yellow};
    color: ${theme.colors.main_brown};
  `}
`;
