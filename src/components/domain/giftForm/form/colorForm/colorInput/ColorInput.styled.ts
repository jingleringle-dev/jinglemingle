import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Label = styled.label`
  font-size: 1.1rem;
`;

export const Input = styled.input`
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  width: 30px;
  height: 33px;

  /* 안쪽부분의 디자인 변경 */
  &::-webkit-color-swatch {
    border-radius: 50%;
    padding: 0;
  }
`;
