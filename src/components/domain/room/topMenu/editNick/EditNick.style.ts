import styled from "styled-components";

export const EditLayout = styled.form`
  width: 322px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 26px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.font_black_01};
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 5px;
`;

export const ErrorText = styled.p`
  margin-top: 10px;
  font-size: 10px;
  color: red;
`;
