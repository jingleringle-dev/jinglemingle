import styled, { css } from "styled-components";

export const InputWrapper = styled.div<{ $hasError?: boolean }>`
  ${({ theme, $hasError }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 5px;
    margin-bottom: ${$hasError ? "12px" : "7px"};

    & > input {
      width: 180px;
      height: 36px;
      padding: 0 4px 0 7px;
      border: ${$hasError && `1px solid ${theme.colors.main_red}`};
    }

    & > span {
      height: fit-content;
      color: ${$hasError && theme.colors.main_red};
      font-size: 0.7em;
    }

    & > button {
      position: absolute;
      right: 7px;
      top: 10px;
      width: fit-content;
    }
  `}
`;

export const Input = styled.input<{ $hasError?: boolean }>``;
