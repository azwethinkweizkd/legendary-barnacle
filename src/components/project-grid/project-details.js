import styled from "styled-components";

export const DetailTitle = styled.h3`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 42px;
  text-align: left;
  margin: 6px;
`;

export const DetailTitleSpan = styled.span`
  font-weight: 600;
`;

export const Details = styled.p`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  width: 90%;
  margin: auto;
  padding-bottom: 16px;
`;

export const DeatilSection = styled.div`
  border-bottom: ${(props) => (props.none ? "none" : " 1px solid black")};
  padding: 8px 0;
  margin: 0 8px;
`;
