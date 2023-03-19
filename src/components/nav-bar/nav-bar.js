import styled from "styled-components";
import { BPNavImg } from "./top-nav-image";
import { BaseNavLink } from "./nav-links";

export const NavBar = () => {
  return (
    <nav>
      <BPNavImg />
      <LinksDiv>
        <BaseNavLink color={`#9FFF8F`}>Work</BaseNavLink>
        <BaseNavLink color={`#FF8FE6`}>About</BaseNavLink>
        <BaseNavLink color={`#F3FF6C`}>Contact</BaseNavLink>
        <BaseNavLink color={`#FFCE31`}>Resume</BaseNavLink>
      </LinksDiv>
    </nav>
  );
};

const LinksDiv = styled.div`
  position: absolute;
  top: 64px;
  right: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 25%;
`;
