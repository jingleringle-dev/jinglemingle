import styled, { keyframes } from "styled-components";

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
  position: relative;
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

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Tooltip = styled.div`
  animation: ${fadeIn} 0.3s ease-in-out;
  position: absolute;
  top: 40px;
  right: 0;
  white-space: nowrap;
  padding: 5px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 13px;
  border: 1px solid ${({ theme }) => theme.colors.font_black_01};
`;

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
