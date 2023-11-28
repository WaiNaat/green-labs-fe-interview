import styled from 'styled-components';

export const Area = styled.div`
  display: flex;
  width: 100%;
  border: 2px solid #333333;
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
  font-size: 2.5rem;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: content-box;
  width: 6rem;
  height: 6rem;
  margin-right: 0;
  margin-left: auto;

  font-size: 1px;

  background-color: #333333;
  border: 1px solid #333333;
  border-radius: 3rem;
`;
