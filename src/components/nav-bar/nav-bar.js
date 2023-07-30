import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { BPNavImg } from "./top-nav-image";
import { BaseNavLink } from "./nav-links";

export const NavBar = () => {
  const ScrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <StyledNav>
      <RouterLink to="/">
        <BPNavImg />
      </RouterLink>
      <LinksDiv>
        <BaseNavLink
          color={`#9FFF8F`}
          to="/"
          onClick={() => ScrollToSection("work")}
        >
          Work
        </BaseNavLink>
        <BaseNavLink
          color={`#FF8FE6`}
          to="/about-me"
          onClick={() => ScrollToSection("about-me")}
        >
          About
        </BaseNavLink>
        <BaseNavLink
          color={`#F3FF6C`}
          to="/about-me"
          onClick={() => ScrollToSection("connect")}
        >
          Contact
        </BaseNavLink>
        <BaseNavLink
          color={`#FFCE31`}
          to="/about-me"
          onClick={() => ScrollToSection("connect")}
        >
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
  @media screen and (max-width: 1469px) {
    justify-content: space-evenly;
  }

  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;
