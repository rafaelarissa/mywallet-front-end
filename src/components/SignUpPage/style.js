import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #8C11BE;

  h1{
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    color: #FFFFFF;
    padding-bottom: 30px;
  }
`;

const StyledLink = styled(Link)`
  height: 40px;
  font-weight: bold;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  text-decoration: none
`;

export {
     Container,
     StyledLink
}