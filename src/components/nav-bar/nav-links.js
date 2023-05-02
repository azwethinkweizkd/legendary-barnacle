import styled from "styled-components";
import { Link } from "react-router-dom";

export const BaseNavLink = styled(Link)`
  background: transparent;
  font-family: "Work Sans";
  font-style: light;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  padding: 4px 12px;
  margin: 0 2px;
  cursor: pointer;
  color: #000000;
  width: max-content;
  text-align: center;

  &:hover {
    background: ${(props) => props.color};
    font-weight: 500;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
  }
`;
