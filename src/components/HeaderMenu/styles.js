import styled from "styled-components";

export const HeaderMenuNav = styled.nav`
  display: flex;
  background-color: rgb(37, 150, 190);
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    li {
      margin: 15px;

      a {
        text-decoration: none;
        color: #ffffff;
        &:hover {
          color: lightgray;
        }
      }
    }
  }
`;
