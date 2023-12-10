import styled from "styled-components";

export const Container = styled.div`
  width: 83px;
  height: 37px;
  background-color: ${({ theme }) => theme.colors.main_brown};
  border-radius: calc(37px / 2);
  display: flex;
  align-items: center;
  padding: 0 4px;
  cursor: pointer;
`;

export const Circle = styled.div<{ $isToggleOn: boolean }>`
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.2s ease-in-out;
  transform: ${({ $isToggleOn }) =>
    $isToggleOn ? "translateX(45px)" : "translateX(0)"};
`;
