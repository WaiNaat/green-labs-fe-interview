import styled from 'styled-components';

export const List = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;

  & > li {
    list-style-type: none;
  }
`;

export const Text = styled.p`
  font-size: 2rem;
`;

export const PageMoveButton = styled.button`
  height: 100%;
  padding: 0 1rem;

  font-size: 2rem;

  border-radius: 7777px;

  transition: all 0.2s;

  &:hover,
  &:focus {
    color: white;
    background-color: #333333;
  }

  &:disabled {
    cursor: not-allowed;
    color: #ababab;
    background-color: white;
  }
`;

export const Pagenation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 50%;
  min-width: 30rem;
  height: 5rem;
  margin: 0 auto;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 5rem;
`;
