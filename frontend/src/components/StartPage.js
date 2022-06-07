import React from "react";
import { useState, useEffect } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import { HeroPage } from "./HeroPage";
import { HistoryQuote } from "./HistoryQuote";
import { JewelleryGallery } from "./JewelleryGallery";
import { TravelQuote } from "./TravelQuote";

import { FinanceQuote } from "./FinanceQuote";

const ID = process.env.REACT_APP_SPACE_ID;
const TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

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
    jewelleryGalleryCollection{items{pictureCollection{items {
      title
      url} 
    }}}
  }
`;

const StartPage = () => {
  const [hero, setHero] = useState(null);
  const [quoteHistory, setQuoteHistory] = useState(null);
  const [jewelleryGallery, setJewelleryGallery] = useState(null);
  const [quoteTravel, setQuoteTravel] = useState(null);
  const [quoteFinance, setQuoteFinance] = useState(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/${ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: `Bearer ${TOKEN}`,
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

        setHero(data.heroCollection.items[0]);
        setQuoteHistory(data.quoteCollection.items[0]);
        setJewelleryGallery(data.jewelleryGalleryCollection.items[0]);
        setQuoteTravel(data.quoteCollection.items[1]);

        setQuoteFinance(data.quoteCollection.items[2]);
      });
  }, []);

  if (!hero) {
    return "Loading...";
  }
  return (
    <div className="App">
      <header className="App-header">
        <HeroPage hero={hero} />
        <HistoryQuote quoteHistory={quoteHistory} />
        <JewelleryGallery jewelleryGallery={jewelleryGallery} />
        <TravelQuote quoteTravel={quoteTravel} />
        <FinanceQuote quoteFinance={quoteFinance} />
      </header>
    </div>
  );
};

export default StartPage;
