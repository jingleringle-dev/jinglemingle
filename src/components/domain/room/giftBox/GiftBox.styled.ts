import { GiftBoxIcon } from "assets";
import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Nickname = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 3px 3px;
`;

export const Giftbox = styled(GiftBoxIcon)<{
  $boxColor: string;
  $lineColor: string;
}>`
  ${({ $boxColor, $lineColor }) => `


  & > g {
    path:first-of-type,
    path:nth-of-type(1) {
      fill: ${$boxColor};
    }

    path:nth-of-type(3),
    path:nth-of-type(4),
    path:nth-of-type(5) {
      fill: ${$lineColor};
    }
  }`}
`;
