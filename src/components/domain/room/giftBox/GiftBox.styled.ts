import { GiftBoxIcon } from "assets";
import styled, { css } from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Nickname = styled.div`
  width: 70px;
  height: 20px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Giftbox = styled(GiftBoxIcon)<{
  boxcolor: string;
  linecolor: string;
}>`
  ${({ boxcolor, linecolor }) => `


  & > g {
    path:first-of-type,
    path:nth-of-type(1) {
      fill: ${boxcolor};
    }

    path:nth-of-type(3),
    path:nth-of-type(4),
    path:nth-of-type(5) {
      fill: ${linecolor};
    }
  }`}
`;
