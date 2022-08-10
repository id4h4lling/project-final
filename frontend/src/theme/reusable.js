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

export const ContentBackground = styled.div`
  background-color: #24384a;
  min-height: 100vh;

  .wrapper {
    width: 90%;
    margin: auto;
    padding-top: 80px;

    @media ${devices.desktop} {
      padding-top: 150px;
      max-width: 1800px;
    }
  }

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
      font-size: 30px;
      letter-spacing: 3px;
      padding: 20px 30px;
    }
  }
`;

export const GalleryBackground = styled.div`
  background-color: #9f9f9f;
  min-height: 100vh;
  position: relative;

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
      font-size: 30px;
      letter-spacing: 3px;
      padding: 20px 30px;
    }
  }
`;
export const Gallery = styled.div`
  width: 90%;
  margin: auto;
  height: 100vh;
  scroll-snap-type: x proximity;
  overflow-x: auto;
  scroll-padding-left: 90px;
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const PictureBox = styled.div`
  display: flex;
  justify-content: row;
  width: 50%auto;
  scroll-snap-align: center;

  @media ${devices.desktop} {
    height: 100vh;
    width: 100vw;
  }

  .picture {
    margin: 100px 15px;
    padding: 30px;
    width: 40vh;

    @media ${devices.desktop} {
      width: 500px;
    }
  }
`;
