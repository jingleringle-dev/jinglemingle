import styled from "styled-components";
import { colors } from "styles/theme";

export const Button = styled.button<{
  $color: keyof typeof colors;
  $width: string;
  $height: string;
}>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  background-color: ${({ $color, theme }) => theme.colors[$color]};
  color: white;
  margin: 0 auto;
`;
