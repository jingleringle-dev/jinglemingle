import styled from "styled-components";

export const Container = styled.form``;

export const TextAreaWrap = styled.div`
  margin-bottom: 30px;
  position: relative;
`;
export const TextArea = styled.textarea`
  width: 100%;
  height: 350px;
  padding: 10px 10px 30px 10px;
  border: 1px solid ${({ theme }) => theme.colors.main_red};
  resize: none;
`;
export const TextLengthCheck = styled.p`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const InputLabelWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

export const Input = styled.input`
  flex-grow: 1;
  height: 45px;
  border: 1px solid ${({ theme }) => theme.colors.main_red};
`;

export const Label = styled.label`
  margin: 0 40px;
`;
