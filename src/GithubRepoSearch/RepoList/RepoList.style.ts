import styled from 'styled-components';

export const List = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;

  & > li {
    list-style-type: none;
  }
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

export const PageMoveButton = styled.button`
  height: 100%;
  padding: 0 1rem;

  font-size: 2rem;

  border-radius: 7777px;

  transition: all 0.2s;

  &:hover {
    color: white;
    background-color: #333333;
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
