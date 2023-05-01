import styled from "styled-components";
import { LandingPageImg } from "./landing-page-image";
import { IntroText } from "./landing-page-text";

export const LandingPageTextAndImg = () => (
  <LandingPageDiv>
    <IntroText />
    <LandingPageImg
      src={process.env.PUBLIC_URL + "/images/IMG_0927 (2) 1.jpg"}
    />
  </LandingPageDiv>
);

const LandingPageDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  @media screen and (max-width: 1275px) {
    flex-direction: column;
    justify-content: center;
  }
`;
