import styled from "styled-components";
import { CustomPageBtn } from "../custom-buttons/page-button";
export const IntroText = () => (
  <IntroDiv>
    <Intro>
      Hello, I’m <OutlinedSpan color="#9FFF8F">Bri Pepper</OutlinedSpan>
      <br />
      <OutlinedSpan color="#FF8FE6">UX/UI</OutlinedSpan> Designer <br />
      Based in <OutlinedSpan color="#F3FF6C">Denver, CO</OutlinedSpan>
    </Intro>
    <TaglineText>
      Positive Thinker. Creative Dreamer. 100% Designer.
    </TaglineText>
    <ContentText>
      Feel free to take a look at my work or get to know a little more about my
      process and how I make a difference in the lives of everyday users.
    </ContentText>
    <ButtonGroup>
      <CustomPageBtn color="#9FFF8F">About Me</CustomPageBtn>
      <CustomPageBtn color="#FFCE31" white={true}>
        Contact Me
      </CustomPageBtn>
    </ButtonGroup>
  </IntroDiv>
);

const IntroDiv = styled.div`
  text-align: center;
`;

const Intro = styled.h1`
  font-family: "Work Sans";
  font-weight: 500;
  font-size: 64px;
  line-height: 150%;
  margin: 0 0;
`;

const OutlinedSpan = styled.span`
  font-family: "Londrina Outline", cursive;
  fill: white;
  color: black;

  &:hover {
    font-family: "Work Sans";
    background: ${(props) => props.color};
    text-shadow: none;
    padding: 1px 2px 1px;
    font: "Work Sans";
    color: black;
  }
`;

const TaglineText = styled.p`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
`;

const ContentText = styled(TaglineText)`
  width: 65%;
  margin: 0 auto 0;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  margin-top: 24px;
`;

const ButtonGroup = styled.div`
  width: 75%;
  margin: 24px auto;
  display: flex;
  justify-content: center;
`;
