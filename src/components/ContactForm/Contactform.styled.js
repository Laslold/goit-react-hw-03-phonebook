import styled from 'styled-components';

export const FormStyled = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 15px;
  & .formInp {
    padding: 5px 10px;
    border: 1px solid red;
    border-radius: 5px;
    color: blue;
  }
`;
export const FormButton = styled.div`
  flex: 0 0 40%;
  padding: 20px;
  border: 1px solid red;
  border-radius: 5px;
`;
