import styled, { css } from "styled-components";

export const InputWrapper = styled.div<{ $hasError?: boolean }>`
  ${({ theme, $hasError }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 5px;
    margin-bottom: ${$hasError ? "5px" : "7px"};
    padding: 5px 0;

    & > input {
      width: 250px;
      height: 36px;
      padding: 0 4px 0 7px;
      border: ${$hasError && `1px solid ${theme.colors.main_red}`};
    }

    & > span {
      height: fit-content;
      color: ${$hasError && theme.colors.main_red};
      font-size: 0.7em;
    }
  `}
`;

export const Button = styled.button`
  position: absolute;
  right: 7px;
  top: 32px;
  width: fit-content;
`;

export const Label = styled.p`
  ${({ theme }) => css`
    font-size: 0.8em;
  `}
`;

export const Input = styled.input<{ $hasError?: boolean }>``;
