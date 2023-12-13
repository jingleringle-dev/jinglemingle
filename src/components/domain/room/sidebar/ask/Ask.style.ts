import styled from "styled-components";

export const AskLayout = styled.form`
  width: 322px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 26px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.font_black_01};
  font-size: 13px;
  font-weight: 400;
`;

export const Prompt = styled.p`
  font-size: 8px;
  font-weight: 400;
  margin-top: 12px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 130px;
  resize: none;
  padding: 5px;
`;
