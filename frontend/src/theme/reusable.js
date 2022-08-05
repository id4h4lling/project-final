import styled from "styled-components";

/////////////// DEVICES ///////////////

export const Devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

/////////////// On all pages ///////////////

/////////////// NavLinks ///////////////
export const NavLink = styled.a``;

export const StyledNavLink = styled(NavLink)`
  font-family: wremena;
  margin: 20px 0 10px;
  padding: 15px;
  font-weight: bold;
  color: #24384a;
  text-decoration: none;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #7b2020;
  }
  &:active {
    color: #7b2020;
  }
`;

const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

/////////////// Quotes ///////////////

export const QuoteBackground = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #7b2020;
  position: relative;
  min-height: 100vh;
  padding-top: 90px;

  @media ${devices.desktop} {
    align-items: center;
    justify-content: center;
  }

  p {
    font-family: "WremenaRegular";
    color: #edbe44;
    letter-spacing: 3px;
    font-size: 24px;
    width: 80%;
    white-space: pre-wrap;

    @media ${devices.tablet} {
      width: 70%;
      font-size: 48px;
    }
  }

  .flashin {
    border-right: 4px solid #edbe44;
    animation: printed-text 5s steps(80),
      flashin-border 0.75s step-start infinite;
  }

  @keyframes flashin-border {
    0% {
      border-color: #edbe44;
    }
    50% {
      border-color: transparent;
    }
    100% {
      border-color: #edbe44;
    }
  }

  @keyframes printed-text {
    from {
      width: 0%;
    }
  }

  h6 {
    font-family: "WremenaRegular";
    font-size: 100px;
  }

  .signTop {
    height: 30px;
    @media ${devices.desktop} {
      height: 60px;
    }
  }
  .signDown {
    height: 30px;
    margin: -25px 0px;
    @media ${devices.desktop} {
      height: 60px;
    }
  }
`;
