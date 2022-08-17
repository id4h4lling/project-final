import styled from "styled-components";

export const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

/////////////// BURGER MENU ///////////////

export const NavbarButton = styled.div`
  border: none;
  background-color: none;
  font-family: "WremenaLight";
  color: #e3b921;
  font-size: 20px;
  font-weight: 600;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #ffdb5c;
  }
  &:active {
    color: #ffdb5c;
  }
`;

export const Burger = styled.div`
  #page-wrap {
    text-align: left;
    overflow: auto;
    top: 10px;
    position: relative;
    z-index: 9;
  }
  .page-wrap {
    display: flex;
    flex-direction: column;
  }

  .bm-item {
    display: inline-block;
    /* Our sidebar item styling */
    text-decoration: none;
    margin-bottom: 10px;
    color: #d1d1d1;
    transition: color 0.2s;
  }
  .bm-item:hover {
    color: white;
  }
  .bm-burger-button {
    position: absolute;
    width: 22px;
    height: 20px;
    right: 7%;
    top: 5%;
  }
  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    // background: #edbe44;
    background: #edbe44;
  }
  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }
  /* Color/shape of close button cross */
  .bm-cross {
    background: #edbe44;
  }
  /* General sidebar styles */
  .bm-menu {
    background: #24384a;
    border: solid #edbe44;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }
  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }
  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
  }
  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.7);
  }
  button {
    font-family: "WremenaRegular";
    font-size: 16px;
    background-color: white;
    border: none;
    width: 125px;
    padding: 8px;
    margin-top: 10px;
    border-radius: 30px;
  }
  @media ${devices.desktop} {
    .bm-burger-button {
      position: absolute;
      width: 42px;
      height: 30px;
      right: 6%;
      top: 7%;
    }
  }
`;

/////////////// ARROWDOWN ////////////

export const ArrowWrapper = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export const ArrowDown = styled.div`
  cursor: pointer;
  .span {
    display: block;
    width: 20px;
    height: 20px;
    border-bottom: 5px solid #edbe44;
    border-right: 5px solid #edbe44;
    transform: rotate(45deg);
    margin: -10px;
    animation: animate 3s infinite;
  }
  .arrow span:nth-child(2) {
    animation-delay: -0.2s;
  }
  .arrow span:nth-child(3) {
    animation-delay: -0.4s;
  }

  &:hover {
    border-bottom: #ffdb5c;
    border-right: #ffdb5c;
  }
  @keyframes animate {
    0% {
      opacity: 0;
      transform: rotate(45deg) translate(-20px, -20px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(45deg) translate(20px, 20px);
    }
  }
`;

////////////// CTABUTTON ////////////

export const ButtonCta = styled.button`
  position: fixed;
  top: 80%;
  right: 6%;
  align-items: right;
  z-index: 1;

  @media ${devices.desktop} {
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  outline: 0;
  cursor: pointer;
  font-family: "WremenaLight";
  border-radius: 50%;
  animation: ripple 15s infinite;
  width: 100px;
  height: 100px;
  padding: 20px;
  background-color: #edbe44;

  &:hover,
  &:focus {
    background-color: #ffdb5c;
  }
  &:active {
    color: #ffdb5c;
  }

  @media ${devices.desktop} {
    width: 150px;
    height: 150px;
    padding: 20px;
  }

  #ctaText {
    font-family: "WremenaRegular";
    font-size: 15px;
    width: 70px;
    letter-spacing: 1px;
    line-height: initial;
    color: #24384a;

    @media ${devices.desktop} {
      font-family: "WremenaRegular";
      font-size: 20px;
      width: 90px;
    }

    @keyframes ripple {
      0% {
        transform: scale(0.9);
      }

      50% {
        transform: scale(1.2);
      }

      100% {
        transform: scale(0.8);
      }
    }
  }
`;

//////////////// HEROPAGE //////////////////

export const HeroSection = styled.div`
  .background {
    width: 100%;
    min-height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 0;
    position: relative;
  }

  .title-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 200px;
    width: 70%;
    margin: auto;
    padding-top: 70px;

    @media ${devices.tablet} {
      padding-top: 120px;
    }

    @media ${devices.desktop} {
      margin-left: 0;
      padding-top: 70px;
    }
  }

  h1 {
    color: #edbe44;
    font-family: "WremenaLight";
    font-size: 30px;
    letter-spacing: 4px;
    margin: 0px 0px 10px 0px;

    @media ${devices.tablet} {
      font-size: 50px;
    }
  }

  h3 {
    font-family: "WremenaRegular";
    color: #edbe44;
    font-size: 10px;
    letter-spacing: 3px;
    text-align: center;

    @media ${devices.tablet} {
      font-size: 20px;
    }
  }

  h4 {
    font-family: "WremenaLight";
    color: #edbe44;

    @media ${devices.tablet} {
      font-size: 20px;
    }
  }
`;

//////////////// CONTENT //////////////////
export const ContentTravel = styled.div`
  width: 80%;
  margin: auto;
  padding: 120px 0 120px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.tablet} {
    padding: 180px 0 200px 0;
  }

  @media ${devices.desktop} {
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  .content-image {
    width: 100%;
    @media ${devices.desktop} {
      width: 50%;
    }
  }

  .content-text {
    font-family: "WremenaRegular";
    color: #edbe44;
    padding: 0 0 80px 0;
    font-size: 16px;
    text-align: left;
    line-height: 35px;

    @media ${devices.tablet} {
      font-size: 22px;
      text-align: left;
    }

    @media ${devices.desktop} {
      font-size: 25px;
      text-align: left;
      width: 40%;
    }
  }
`;

export const ContentLife = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  padding: 120px 0 120px 0;

  @media ${devices.desktop} {
    flex-direction: row;
    justify-content: space-around;

    margin: auto;
    padding: 180px 0 200px 0;
  }

  .text {
    font-family: "WremenaRegular";
    color: #edbe44;
    font-size: 16px;
    text-align: left;
    line-height: 35px;
    white-space: pre-wrap;

    @media ${devices.tablet} {
      font-size: 20px;
      text-align: left;
      width: 90%;
      margin: auto;
    }
    @media ${devices.desktop} {
      font-size: 20px;
      text-align: left;
      width: 90%;
      margin: 0;
    }
  }

  .text-container {
    width: 100%;

    @media ${devices.desktop} {
      width: 80%;
    }
  }

  .image-container {
    width: 80%;
    margin-top: 70px;

    @media ${devices.tablet} {
      width: 50%;
      margin-left: 5%;
    }

    @media ${devices.desktop} {
      width: 30%;
      margin: 0;
    }
  }

  .lifestory-image {
    width: 100%;
  }
`;

export const ContentAuthor = styled.div`
  width: 80%;
  margin: auto;
  padding: 120px 0 70px 0;
  display: flex;
  flex-direction: column;

  @media ${devices.desktop} {
    flex-direction: row;
    justify-content: center;
    padding: 180px 0 200px 0;
  }

  .intro {
    color: #edbe44;
    margin-bottom: 40px;
    margin-top: 40px;
    line-height: 30px;
    text-align: left;

    @media ${devices.desktop} {
      margin: 0 0 40px 70px;
      text-align: left;
    }
  }
  .citat {
    color: #edbe44;
    white-space: pre-wrap;
    text-align: left;
    line-height: 28px;

    @media ${devices.desktop} {
      margin-left: 70px;
      line-height: 35px;
      text-align: left;
    }
  }

  .image-container {
    width: 80%;

    @media ${devices.tablet} {
      width: 50%;
    }

    @media ${devices.desktop} {
      width: 25%;
    }
  }
  .text {
    width: 100%;
    @media ${devices.desktop} {
      width: 50%;
      margin-left: 40px;
    }
  }
  .picture {
    width: 100%;
  }
`;

///////////// CTA PAGE ///////////
export const BackgroundCtaPage = styled.div`
  .background {
    width: 100%;
    min-height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ButtonCtaPage = styled.div`
  button {
    margin: 0 20px 0 20px;
    background-color: #7b2020;
    color: inherit;
    border: none;
    padding: 5px;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    transition: 0.5s;
    &:hover {
      background-color: #24384a;
      cursor: pointer;
    }
    @media ${devices.tablet} {
      padding: 10px;
      margin: 0;
    }

    h1 {
      font-family: "WremenaRegular";
      color: #edbe44;
      font-size: 24px;
      letter-spacing: 3px;

      @media ${devices.tablet} {
        font-size: 40px;
      }
      @media ${devices.desktop} {
        font-size: 50px;
      }
    }
  }
`;

//////////// FOOTER ////////////

export const BackgroundFooter = styled.div`
  background-color: #7b2020;
  padding: 50px 10px 40px 10px;
  font-family: "WremenaRegular";
  color: #edbe44;
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 50%;
    margin: 15%;
    @media ${devices.tablet} {
      display: flex;
      justify-content: space-evenly;
      flex-direction: row;
      padding: 60px 100px 60px 0px;
      width: 80%;
      margin: auto;
    }
  }
  p {
    font-size: 12px;
    @media ${devices.tablet} {
      font-size: 16px;
    }
  }
  h4 {
    font-size: 14px;
    @media ${devices.desktop} {
      font-size: 18px;
    }
  }
  section {
    line-height: 1.6;
    margin: 10px;
  }
  .middle {
    text-align: left;
    @media ${devices.desktop} {
      text-align: center;
    }
  }
  .logo {
    padding: 0px 2px;
    @media ${devices.desktop} {
      width: 15px;
    }
  }
`;

export const StyledLink = styled.div`
  a {
    text-decoration: none;
    color: #edbe44;
    &:hover {
      color: #fff0bb;
      cursor: pointer;
    }
  }
  h4 {
    font-family: "WremenaRegular";
    color: #edbe44;
    &:hover {
      color: #fff0bb;
      cursor: pointer;
    }
  }
`;

//////////// POLICY ////////////

export const PolicyBackground = styled.div`
  background-color: #e3b921;
  padding: 30px;
`;

export const Text = styled.div`
  color: #24384a;
  width: 100%;
  font-family: wremena;
  padding: 20px;
  line-height: 25px;
  font-size: 16px;
  padding: 20px;

  li {
    margin: 15px;
  }

  .bold {
    font-family: wremenabold;
  }

  @media ${devices.desktop} {
    width: 60%;
    padding: 20px;
    line-height: 25px;
    font-size: 16px;
    padding: 100px;
  }
`;
