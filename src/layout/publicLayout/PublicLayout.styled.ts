import styled, { css } from "styled-components";

import { homeBg01Img } from "assets";

export const PublicLayout = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 768px;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${homeBg01Img});

    form,
    h2,
    p,
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
