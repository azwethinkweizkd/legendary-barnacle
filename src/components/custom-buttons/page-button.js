import styled from "styled-components";
import { Link } from "react-router-dom";

export const CustomPageBtn = styled(Link)`
  width: 244px;
  line-height: 52px;
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  background: ${(props) => (props.white ? "white" : "#c4ebe2")};
  border: ${(props) =>
    props.white ? "1px solid rgba(0, 0, 0, 0.36)" : "none"};
  border-radius: 50px;
  margin: 0 auto 0;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: ${(props) => props.color};
    font-style: normal;
    font-weight: 700;
    border: none;
  }

  &:visited {
    color: black;
  }
`;
export const CustomPageATag = styled.a`
  width: 244px;
  line-height: 52px;
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  background: ${(props) => (props.white ? "white" : "#c4ebe2")};
  border: ${(props) =>
    props.white ? "1px solid rgba(0, 0, 0, 0.36)" : "none"};
  border-radius: 50px;
  margin: 0 auto 0;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: ${(props) => props.color};
    font-style: normal;
    font-weight: 700;
    border: none;
  }

  &:visited {
    color: black;
  }
`;
