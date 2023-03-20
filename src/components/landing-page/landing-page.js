import styled from "styled-components";
import { LandingPageImg } from "./landing-page-image";
import { IntroText } from "./landing-page-text";

export const LandingPageTextAndImg = () => (
  <LandingPageDiv>
    <IntroText />
    <LandingPageImg src={process.env.PUBLIC_URL + "/images/BPHeadshot.jpg"} />
  </LandingPageDiv>
);

const LandingPageDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
