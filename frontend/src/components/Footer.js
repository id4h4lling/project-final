import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import linkedin from "icons/Linkdin.svg";

const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

const Background = styled.div`
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
      padding: 60px 0 60px 0;
      width: 100%;
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
const StyledLink = styled.div`
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
export const Footer = () => {
  return (
    <div className="scroll-stop">
      <Background>
        <div className="wrapper">
          <section>
            <h4>MED STÖD AV</h4>
            <p>IRIS stipendiet</p>
            <p>AX:SON JOHONSONS STIFTELSE</p>
            <p>LÄNGMANSKA KULTURFONDEN</p>
          </section>
          <section className="middle">
            <StyledLink>
              {" "}
              <Link to={"/policy"}>
                <h4>Intigretetspolicy</h4>
              </Link>
              <p>
                Web:
                <a href="https://www.linkedin.com/in/katarina-elgerus/">
                  <img className="logo" src={linkedin} alt="logo" />
                  Katarina Elgerus
                </a>
                |
                <a href="https://www.linkedin.com/in/ida-halling/">
                  <img className="logo" src={linkedin} alt="logo" />
                  Ida Halling
                </a>
              </p>
              <p> © 2022 Ida Halling </p>
            </StyledLink>
          </section>

          <section className="left">
            <h4>KONTAKT</h4>
            <p>Ida Halling</p>
            <p>info@idahalling.com</p>
            <p>+46 70 498 66 88</p>
          </section>
        </div>
      </Background>
    </div>
  );
};
