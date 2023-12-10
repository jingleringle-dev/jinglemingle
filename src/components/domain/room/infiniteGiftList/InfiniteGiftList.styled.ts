import styled from "styled-components";

export const Container = styled.div`
  width: 85%;
  height: 75vh;
  background-color: rgba(255, 255, 255, 0.9);
  margin: 0 auto;
  overflow-y: hidden;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 30px 0;
  }
`;
