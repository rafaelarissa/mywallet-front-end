import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  background-color: #8C11BE;

  h1{
    font-size: 26px;
    font-weight: bold;
    padding-bottom: 25px;
    color: #FFFFFF;
  }

  main{
    width: 326px;
    height: 446px;
    background-color: #ffffff;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #868686;
  }

  .container-new-transaction{
    display: flex;
    gap: 15px;
    padding-top: 13px;
    div{
      font-size: 17px;
      color: #FFFFFF;
      font-weight: bold;
      width: 155px;
      height: 114px;
      background-color: #A328D6;
      border-radius: 5px;
    }
  }
`;

export {
  Container
}