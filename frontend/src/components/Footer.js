import React from "react";
import { Policy } from "./Policy";
import styled from "styled-components";
import { Link } from "react-router-dom";

const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

const Background = styled.div`
  background-color: #7b2020;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 10px 40px 10px;
  font-family: "WremenaRegular";
  color: #edbe44;

  @media ${devices.desktop} {
    display: flex;
    justify-content: space-around;
    padding: 60px 0 60px 0;
  }
  p {
    font-size: 12px;
    @media ${devices.desktop} {
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
  }

  .middle {
    text-align: left;
    @media ${devices.desktop} {
      text-align: center;
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
  }
`;

export const Footer = () => {
  return (
    <div className="scroll-stop">
      <Background>
        <section>
          <h4>MED STÖD AV</h4>
          <p>IRIS stipendiet</p>
          <p>AX:SON JOHONSONS STIFTELSE</p>
          <p>LÄNGMANSKA KULTURFONDEN</p>
        </section>
        <section className="middle">
          <StyledLink>
            {" "}
            <Link to={"/Policy"}>
              <h4>Intigretetspolicy</h4>
            </Link>
          </StyledLink>
          <p>Web: Katarina Elgerus | Ida Halling</p>
          <p> © 2022 Ida Halling </p>
        </section>

        <section>
          <h4>KONTAKT</h4>
          <p>Ida Halling</p>
          <p>info@idahalling.com</p>
          <p>+4670 498 66 88</p>
        </section>
      </Background>
    </div>
  );
};
