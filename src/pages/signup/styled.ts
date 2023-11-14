import styled, { css } from "styled-components";

export const SignUpWrapper = styled.form`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-image: url("public/bg_01.png");
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > div,
    button {
      z-index: 10;
    }

    &::before {
      content: "";
      width: 90%;
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
