import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
};

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  justify-content: space-evenly;
  height: 350px;
  width: 90%;

  h1 {
    color: #edbe44;
    font-family: "WremenaLight";
    font-size: 24px;
    text-align: left;
    @media ${devices.desktop} {
      font-size: 30px;
    }
  }

  h2 {
    color: #edbe44;
    font-family: "WremenaLight";
    font-size: 20px;
    padding: 0px 10px 0px 0px;
    text-align: left;
  }

  p {
    color: #edbe44;
    font-family: "WremenaLight";
    font-size: 12px;
    width: 70%;
  }

  a {
    text-decoration: none;
    color: #edbe44;
    &:hover {
      color: #fff0bb;
      cursor: pointer;
    }
  }
`;

const Input = styled.input`
  background-color: #c4c4c4;
  border-radius: unset;

  font-family: "WremenaLight";
  font-size: 16px;
  color: #2f2a65;
  padding: 10px;
  @media ${devices.desktop} {
    font-size: 20px;
  }
  ::placeholder {
    font-size: 16px;
    color: #263541;
    padding: 10px;
  }
`;

const SubmitButton = styled.button`
  all: unset;
  border: none;
  outline: 0;
  width: auto;
  background-color: #edbe44;
  font-family: "WremenaRegular";
  color: #263541;
  padding: 6px;
  font-size: 14px;
  @media ${devices.desktop} {
    font-size: 18px;
    padding: 10px;
  }
`;

const StyledThankYou = styled.div`
  color: #edbe44;
  font-family: "WremenaLight";
  font-size: 20px;
  text-align: center;

  h1 {
    padding: 20px 0px;
  }
`;

export const Form = ({ showThankYou, setShowThankYou }) => {
  const [useremail, setUserEmail] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        useremail: useremail,
      }),
    };
    fetch("https://bookreales-hair.herokuapp.com/signup", options)
      .then((res) => res.json())
      .then(() => setUserEmail(""))
      .finally(() => setShowThankYou(true));
  };

  return (
    <form onSubmit={onFormSubmit}>
      {!showThankYou && (
        <StyledForm>
          <h1>Kontakta mig när boken släpps!</h1>

          <Input
            type="text"
            placeholder="Epostadress"
            id="email"
            value={useremail}
            onChange={(e) => setUserEmail(e.target.value)}
          />

          <p>
            Genom att fylla i din mail godkänner du att vi använder din
            information för att kontakta dig om boken.
            <br />
            <Link to={"/policy"}>Se vår integritetspolicy här.</Link>
          </p>
          <SubmitButton type="submit">Skicka in</SubmitButton>
        </StyledForm>
      )}
      {showThankYou && (
        <StyledThankYou>
          <h1>Tack!</h1>
          <h3>
            {" "}
            Vad kul att du vill veta mer, <br />
            du kommer få ett mail när boken släpps.
          </h3>
        </StyledThankYou>
      )}
    </form>
  );
};
