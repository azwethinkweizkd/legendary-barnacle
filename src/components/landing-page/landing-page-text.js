import styled from "styled-components";

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
  </IntroDiv>
);

const IntroDiv = styled.div`
  text-align: center;
  margin: none;
`;

const Intro = styled.h1`
  font: "Londrina Outline";
  font-weight: 500;
  font-size: 64px;
  line-height: 150%;
  margin-top: none;
`;

const OutlinedSpan = styled.span`
  font: "Londrina Outline";
  color: white;
  text-shadow: -1px -1px 0 #000, 0 -1px 0 #000, 1px -1px 0 #000, 1px 0 0 #000,
    1px 1px 0 #000, 0 1px 0 #000, -1px 1px 0 #000, -1px 0 0 #000;

  &:hover {
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
`;
