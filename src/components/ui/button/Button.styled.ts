import styled from "styled-components";

export const Button = styled.button<{
  $green?: boolean;
  $width: string;
  $height: string;
}>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  background-color: ${(props) =>
    props.$green ? props.theme.colors.main_green : props.theme.colors.main_red};
  color: white;
  margin: 0 auto;
`;
