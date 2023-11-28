import styled from 'styled-components';

export const Area = styled.div`
  display: flex;
  width: 100%;
  border: 2px solid rgb(72, 206, 140);
  border-radius: 7777px;
`;

export const HiddenLabel = styled.label`
  position: absolute;

  overflow: hidden;

  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;

  clip: rect(0 0 0 0);
`;

export const Input = styled.input`
  width: 85%;
  margin-left: 0rem;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 4rem;
  height: 4rem;
  margin-right: 0;
  margin-left: auto;

  font-size: 1px;

  background-color: rgb(72, 206, 140);
  border: 1px solid rgb(72, 206, 140);
  border-radius: 2rem;
`;
