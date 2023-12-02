import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SelectRoomWrapper = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 6px;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    margin-bottom: 25px;
    color: ${theme.colors.main_brown};
    font-size: 2em;
    text-align: center;
  `}
`;

export const UlWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Ul = styled.ul`
  ${({ theme }) => css`
    display: flex;
    width: 240px;
    transition: all 0.5s ease-in-out;

    & > li {
      padding: 10px;
      background-color: ${theme.colors.main_red};
    }
  `}
`;

export const Imgs = styled.img`
  width: 220px;
`;

export const Info = styled.p`
  ${({ theme }) => css`
    padding: 7px 0 15px;
    font-size: 0.7em;
  `}
`;

export const SelectRoomBtn = styled.button`
  ${({ theme }) => css`
    width: 280px;
    height: 36px;
    margin-bottom: 10px;
    background-color: ${theme.colors.main_red};
    color: ${theme.colors.white};

    &:disabled {
      margin-top: 10px;
      background-color: ${theme.colors.disabled_red};
      cursor: not-allowed;
    }
  `}
`;
