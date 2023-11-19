import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.colors.main_brown};
  opacity: 0.9;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  @media (min-width: 768px) {
    width: 768px;
  }
`;
