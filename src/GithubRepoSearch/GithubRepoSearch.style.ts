import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: 5rem;

  min-width: 280px;
  max-width: 1024px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Title = styled.h2`
  overflow: hidden;

  width: 100%;

  font-size: 3rem;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Text = styled.p`
  font-size: 2rem;
`;
