import styled from "styled-components";

/////////////// DEVICES ///////////////

export const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

/////////////// On all pages ///////////////

/////////////// NavLinks ///////////////
export const NavLink = styled.a``;

export const StyledNavLink = styled(NavLink)`
  font-family: "WremenaRegular";
  margin: 20px 0 10px;
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

/////////////// Quotes ///////////////

export const QuoteBackground = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #7b2020;
  position: relative;
  min-height: 100vh;
  padding-top: 130px;

  @media ${devices.desktop} {
    justify-content: center;
    padding-top: 300px;
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
      font-size: 28px;
    }

    @media ${devices.desktop} {
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

/////////////// Picture + text pages ///////////////

export const ContentBackground = styled.div`
  background-color: #24384a;
  min-height: 100vh;

  .wrapper {
    width: 90%;
    margin: auto;
    padding-top: 80px;

    @media ${devices.desktop} {
      padding-top: 100px;
      max-width: 1800px;
    }
  }

  h2 {
    font-family: "WremenaRegular";
    color: #24384a;
    font-size: 16px;
    letter-spacing: 3px;
    text-transform: uppercase;
    background-color: #edbe44;
    padding: 20px 30px;
    display: inline;

    @media ${devices.tablet} {
      font-size: 20px;
      letter-spacing: 3px;
      padding: 20px 30px;
    }

    @media ${devices.desktop} {
      font-size: 25px;
      letter-spacing: 3px;
      padding: 20px 30px;
    }
  }
`;

export const GalleryBackground = styled.div`
  background-color: #9f9f9f;
  min-height: 100vh;
  position: relative;
  z-index: 2;

  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-padding: 50%;
  position: relative;

  .wrapper {
    width: 90%;
    margin: auto;
    padding-top: 90px;

    @media ${devices.desktop} {
      padding-top: 100px;
      padding-bottom: 100px;
    }
  }
`;

/////////////// Gallery ///////////////

export const Title = styled.div`
  h2 {
    font-family: "WremenaRegular";
    color: #24384a;
    font-size: 18px;
    letter-spacing: 3px;
    text-transform: uppercase;
    background-color: #edbe44;
    padding: 20px 30px;
    display: inline;

    @media ${devices.tablet} {
      font-size: 25px;
      padding: 20px 30px;
    }

    @media ${devices.desktop} {
      font-size: 30px;
      padding: 20px 30px;
    }
  }
`;
export const Gallery = styled.div`
  display: flex;
  align-items: center;
  padding-top: 70px;

  .picture {
    width: 250px;
    display: inline-block;
    padding: 10px;
    transition: 0.8s;
    transition-timing-function: ease-in-out;

    @media ${devices.desktop} {
      width: 500px;
      padding: 30px;
    }
  }
  .picture:hover {
    scale: 1.1;
    cursor: pointer;
  }
  .pointer {
    opacity: 0.5;
    color: #edbe44;

    @media ${devices.desktop} {
      height: 70px;
    }
  }
  .pointer:hover {
    opacity: 1;
    cursor: pointer;
  }

  .image-slider {
    display: flex;
    align-items: center;
    overflow-x: scroll;
    scroll-snap-type: x proximity;
    scroll-behavior: smooth;
    scroll-padding-left: 90px;
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
