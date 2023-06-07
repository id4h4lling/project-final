import React from "react";
import { useState } from "react";
import {
  StyledForm,
  Input,
  SubmitButton,
  StyledThankYou,
} from "theme/FormStyled";
import { StyledNavLink } from "theme/ReusableStyle";
import { Link } from "react-router-dom";

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
            <Link to={"/policy"}>
              <StyledNavLink>Se vår integritetspolicy här.</StyledNavLink>
            </Link>
          </p>
          <SubmitButton
            type="submit"
            title="Knappen måste bara vakna till lite, tryck igen du!"
          >
            Skicka in
          </SubmitButton>
          <p>
            Ibland kan de gå lite långsamt innan knappen svarar, <br />
            tack för att du väntar!
          </p>
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
