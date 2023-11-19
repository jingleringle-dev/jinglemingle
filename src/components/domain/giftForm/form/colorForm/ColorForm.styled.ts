import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
`;

export const GiftBoxInputWrap = styled.div`
  width: 100%;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.main_red};
  padding: 50px 30px;
  margin-bottom: 50px;
`;

export const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const Text = styled.p`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 30px;
  font-size: 1.1rem;
`;
