import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const BackgroundImage = styled.div<{
  $bgImg: string;
  $opacity?: boolean;
}>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$bgImg});
  background-position: right bottom;
  background-size: 150%;
  ${({ $opacity }) => $opacity && "opacity:0.5"};
  position: absolute;
  z-index: -1;
`;
