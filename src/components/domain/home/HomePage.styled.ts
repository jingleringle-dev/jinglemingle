import styled, { css } from "styled-components";

export const HomeWrapper = styled.div`
  ${({ theme }) => css`
    width: 500px;
    height: 500px;
    background-color: ${theme.colors.main_beige};
  `}
`;
