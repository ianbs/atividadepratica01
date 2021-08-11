import styled from "styled-components";

export const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 60vh;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 10px;

  h2 {
    font-family: Georgia, "Times New Roman", Times, serif;
    font-weight: bolder;
    font-size: 2em;
  }

  a {
    align-self: auto;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 1.5em;
    color: rgb(37, 150, 190);
  }
  article {
    line-break: loose;
    text-align: justify;
    width: 30%;
    h4 {
      font-family: Georgia, "Times New Roman", Times, serif;
      font-size: 1.5em;
      color: rgb(37, 150, 190);
    }
    p {
      font-weight: 600;
    }
  }
`;
