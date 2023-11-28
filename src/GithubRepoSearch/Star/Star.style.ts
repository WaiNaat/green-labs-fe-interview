import styled, { css } from 'styled-components';

export const Area = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 7rem;
  height: 7rem;

  background-color: #333333;

  transition: background-color 0.2s linear;

  &:hover {
    background-color: #555555;
  }

  &:disabled {
    cursor: progress;
    background-color: #888888;
  }
`;

const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const StarIcon = styled.span`
  ${center}
  width: 100%;
  height: 3rem;
  font-size: 3rem;
  color: yellow;
`;

export const Stargazers = styled.p`
  ${center}
`;

export const Message = styled.p`
  ${center}
  font-size: 1rem;
`;
