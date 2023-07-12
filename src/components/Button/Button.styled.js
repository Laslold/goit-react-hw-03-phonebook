import styled from 'styled-components';

export const ButtonStyle = styled.button`
  max-width: 110px;
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: blue;
  margin-right: 15px;
  margin-left: 15px;
  color: white;
  cursor: pointer;
  &:hover {
    border-color: blue;
    background: white;
    color: blue;
  }
  &.tertiary {
    height: 30px;
    margin: 0;
    background-color: #ff9800;
    color: white;
    &:hover {
      background-color: red;
      font-size: 16px;
      font-weight: bold;
    }
  }
  &.primary {
    height: 70px;
    margin: 0;
    background-color: #ffd700;
    color: white;
    &:hover {
      background-color: red;
      font-size: 16px;
      font-weight: bold;
    }
  }
  &.secondary {
    height: 50px;
    margin: 0;
    background-color: #c0c0c0;
    color: white;
    &:hover {
      background-color: red;
      font-size: 16px;
      font-weight: bold;
    }
  }
`;
