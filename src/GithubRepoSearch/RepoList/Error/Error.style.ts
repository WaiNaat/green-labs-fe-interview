import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  align-items: center;
`;

export const Imoticon = styled.span`
  font-size: 7rem;
`;

export const Text = styled.p`
  font-size: 2rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
`;

export const Button = styled.button`
  width: max-content;
  padding: 1.5rem;

  font-size: 2.2rem;
  color: white;

  background-color: #888888;
  border-radius: 7777px;

  transition: all 0.2s;

  &:hover,
  &:focus {
    background-color: #333333;
  }
`;
