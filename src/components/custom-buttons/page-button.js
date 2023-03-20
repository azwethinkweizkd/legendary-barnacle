import styled from "styled-components";

export const CustomPageBtn = styled.button`
  width: 244px;
  height: 52px;
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  background: ${(props) => (props.white ? "white" : "#c4ebe2")};
  border: ${(props) =>
    props.white ? "1px solid rgba(0, 0, 0, 0.36)" : "none"};
  border-radius: 50px;
  margin: 0 auto 0;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.color};
    font-style: normal;
    font-weight: 700;
    border: none;
  }
`;