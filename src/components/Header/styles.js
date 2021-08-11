import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  background-color: rgb(37, 150, 190);
  color: #ffffff;
  align-items: flex-start;
  align-content: center;
  height: 30vh;
  padding-left: 200px;
  padding-right: 200px;
  padding-top: 20px;
  img {
    height: 200px;
    width: 220px;
    border-radius: 50%;
    margin-right: 50px;
  }
  .description-doge {
    font-size: 1.2em;
    font-family: Arial, Helvetica, sans-serif;

    h1 {
      font-size: 2.2em;
    }
  }
`;
