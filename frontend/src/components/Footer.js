import React from "react";
import { Link } from "react-router-dom";
import linkedin from "icons/Linkdin.svg";
import { StyledNavLink } from "theme/reusable";
import { BackgroundFooter, StyledLink } from "theme/styles";

export const Footer = () => {
  return (
    <div className="scroll-stop">
      <BackgroundFooter>
        <div className="wrapper" id="contact">
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
                <StyledNavLink>Intigretetspolicy</StyledNavLink>
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
      </BackgroundFooter>
    </div>
  );
};
