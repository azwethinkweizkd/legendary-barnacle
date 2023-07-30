import styled from "styled-components";

export const ProjectScreenshotImg = styled.img`
  padding: 0 24px;
  margin: auto;
  max-height: max-content;
  @media screen and (max-width: 1600px) {
    height: 90%;
    padding: 0 8px;
  }
  @media screen and (max-width: 765px) {
    height: 80%;
    padding: 0 2px;
  }
  @media screen and (max-width: 578px) {
    height: 60%;
    padding: 0px;
  }
  @media screen and (max-width: 429px) {
    height: 45%;
  }
`;
