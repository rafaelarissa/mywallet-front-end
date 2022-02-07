import styled from "styled-components";

const Button = styled.button`
  height: 45px;
  width: 100%;
  background-color: #A328D6;
  ${(props) => props.disabled && "opacity: 0.7;"}
  color: #FFFFFF;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  padding: 14px;
  ${(props) => !props.noMargin && "margin-bottom: 10px;"}
  border-radius: 4.63636px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
`;

export default Button;