import React from "react";
import { useState, useEffect } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import { HeroPage } from "./HeroPage";
import { HistoryQuote } from "./HistoryQuote";

// const ID = process.env.REACT_APP_SPACE_ID;
// const TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

const query = `
{heroCollection{items{headline, mainHeader, topheading, subheading, heroimage {
    title
    description
    contentType
    fileName
    size
    url
    width
    height
  }}}
    quoteCollection{items{quote}}
    
  }
`;

const StartPage = () => {
  const [hero, setHero] = useState(null);
  const [quoteHistory, setQuoteHistory] = useState(null);

  useEffect(() => {
    window
      .fetch("https://graphql.contentful.com/content/v1/spaces/&&&&", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: "Bearer &&&&&&",
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.log(process.env);
          console.error(errors);
        }

        // rerender the entire component with new data
        setQuoteHistory(data.quoteCollection.items[0]);
        setHero(data.heroCollection.items[0]);
      });
  }, []);

  if (!quoteHistory) {
    return "Loading...";
  }
  return (
    <div className="App">
      <header className="App-header">
        <HeroPage hero={hero} />
        <HistoryQuote quoteHistory={quoteHistory} />
      </header>
    </div>
  );
};

export default StartPage;
