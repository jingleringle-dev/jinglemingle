import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  width: 330px;
  border: 1px solid ${({ theme }) => theme.colors.main_beige};
`;

export const CloseButton = styled.div`
  width: 22px;
  height: 22px;
  font-size: 1.2rem;
  &::before {
    content: "X";
  }
`;

export const TopWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const From = styled.p``;

export const Text = styled.p`
  width: 100%;
  min-height: 200px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
