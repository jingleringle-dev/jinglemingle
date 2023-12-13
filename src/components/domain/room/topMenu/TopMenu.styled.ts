import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const ChangeRoom = styled.button`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.main_brown};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;
