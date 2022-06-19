import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledForm = styled.div`
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    justify-content: space-evenly;
    height: 300px;
    width: 90%;
  }

  h1 {
    color: #edbe44;
    font-family: "WremenaLight";
    font-size: 30px;
    text-align: center;
  }

  label {
    color: #edbe44;
    font-family: "WremenaLight";
    font-size: 25px;
  }

  .input {
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    font-family: "WremenaLight";
    font-size: 20px;
    color: #edbe44;
  }

  .submit-button {
    outline: 0;
    width: auto;
    background-color: #7b2020;
    font-family: "WremenaLight";
    color: #edbe44;
    padding: 10px;
  }
`;
const StyledThankYou = styled.div`
  color: #edbe44;
  font-family: "WremenaLight";
  font-size: 30px;
  text-align: center;
`;

export const Form = ({ showThankYou, setShowThankYou }) => {
  const [useremail, setUserEmail] = useState("");
  // const [showThankYou, setShowThankYou]= useState(false);
  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        useremail: useremail,
      }),
    };
    fetch("http://localhost:8080/signup", options)
      .then((res) => res.json())
      .then(() => setUserEmail(""))
      .finally(() => setShowThankYou(true));
  };

  return (
    <form onSubmit={onFormSubmit}>
      {!showThankYou && (
        <>
          <StyledForm>
            <div className="wrapper">
              <h1>Sign up for news about the bookrelease!</h1>
              <div className="input">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={useremail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </div>

              <button className="submit-button" type="submit">
                Submit
              </button>
            </div>
          </StyledForm>
        </>
      )}
      {showThankYou && (
        <StyledThankYou>
          <h1>Tack!</h1>
          <h3> Du kommer få ett mail när mail när boken släpps!</h3>
        </StyledThankYou>
      )}
    </form>
  );
};
