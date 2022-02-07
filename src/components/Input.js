import styled from "styled-components";

const Input = styled.input`
  height: 45px;
  width: 100%;
  border: 1px solid #D5D5D5;
  background-color: ${props => props.disabled && '#F2F2F2'};
  font-family: 'Raleway', sans-serif;
  padding: 14px;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 20px;

  ::placeholder {
    color: #000000;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
  }
`;

export default Input;