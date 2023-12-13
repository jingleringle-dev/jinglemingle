import styled from "styled-components";

export const SidebarContainer = styled.div<{ isOpen: boolean }>`
  width: 320px;
  height: 100%;
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? 0 : "-320px")};
  background-color: ${({ theme }) => theme.colors.main_brown};
  transition: right 0.3s ease;
  overflow: hidden;
  z-index: 9999;
  padding: 30px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 30px;
`;
export const Information = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  margin-top: 11px;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 25px;
`;

export const IconWrapper = styled.div`
  width: 20px;
`;

export const ButtonTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
`;
