import styled from "styled-components";
import { BPNavImg } from "./top-nav-image";
import { BaseNavLink } from "./nav-links";

export const NavBar = () => {
  return (
    <StyledNav>
      <BPNavImg />
      <LinksDiv>
        <BaseNavLink color={`#9FFF8F`} to="/">
          Work
        </BaseNavLink>
        <BaseNavLink color={`#FF8FE6`} to="/about-me" href="/#about">
          About
        </BaseNavLink>
        <BaseNavLink color={`#F3FF6C`} to="/about-me" href="/#connect">
          Contact
        </BaseNavLink>
        <BaseNavLink color={`#FFCE31`} to="/about-me" href="/#connect">
          Resume
        </BaseNavLink>
      </LinksDiv>
    </StyledNav>
  );
};

const LinksDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 25%;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;
