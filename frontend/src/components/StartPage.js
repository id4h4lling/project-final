import React from "react";
import { useState, useEffect } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import { SignUp } from "./SignUp";
import { HeroPage } from "./HeroPage";
import { HistoryQuote } from "./HistoryQuote";
import { JewelleryGallery } from "./JewelleryGallery";
import { TravelPage } from "./TravelPage";
import { TravelQuote } from "./TravelQuote";
import { TechniqueGallery } from "./TechniqueGallery";
import { FinanceQuote } from "./FinanceQuote";
import { Video } from "./Video";
import { Policy } from "./Policy";
import { Cta } from "./Cta";
import { LifeStory } from "./LifeStory";
import { AboutAuthor } from "./AboutAuthor";
import { Footer } from "./Footer";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styled from "styled-components";

const ID = process.env.REACT_APP_SPACE_ID;
const TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

const query = `
{  
  heroCollection {
  items {
    headline
    mainHeader
    topheading
    subheading
    heroimage {
      title
      description
      contentType
      fileName
      size
      url
      width
      height
    }
  }
}
quoteCollection {
  items {
    quote
  }
}
  jewelleryGalleryCollection {
    items {
      title
      pictureCollection(limit: 20) {
        items {
          title
          url
        }
      }
    }
  }
  travelPageCollection {
    items {
      picture {
        title
        description
        contentType
        fileName
        size
        url
        width
        height
      }
      title
      travelText
    }
  }
  techniqueGalleryCollection {
    items {
      title
      pictureCollection(limit: 20) {
        items {
          title
          url
        }
      }
    }
  }

  lifestoryCollection {
    items {picture {
      title
      description
      contentType
      fileName
      size
      url
      width
      height
    }, title
      text{json}
    }
  }

  ctaCollection {
    items {
      cta
      picture {
        title
        description
        contentType
        fileName
        size
        url
        width
        height
      }
    }
  }

 

  aboutAuthorCollection(limit: 5) {
    items {title,authorPicture {
      title
      description
      contentType
      fileName
      size
      url
      width
      height
    },
      authorBio {
        json
        links {
          entries {
            inline {
              sys {
                id
              }
              __typename
              ... on AboutAuthor {
                title
              }
            }
          }
        }
      }
    }
  }

  footerCollection{
    items{
      grants, 
      madeBy, 
      contact, 
      copyright
     }
    }



  }

  
`;

const StartPage = () => {
  const [hero, setHero] = useState(null);
  const [quoteHistory, setQuoteHistory] = useState(null);
  const [jewelleryGallery, setJewelleryGallery] = useState(null);
  const [quoteTravel, setQuoteTravel] = useState(null);
  const [travelPage, setTravelPage] = useState(null);
  const [quoteFinance, setQuoteFinance] = useState(null);
  const [techniqueGallery, setTechniqueGallery] = useState(null);
  const [lifeStory, setLifeStory] = useState(null);
  const [cta, setCta] = useState(null);
  const [aboutAuthor, setAboutAuthor] = useState(null);
  const [footer, setFooter] = useState(null);

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
          console.error(errors);
        }

        // rerender the entire component with new data

        setHero(data.heroCollection.items[0]);
        setQuoteHistory(data.quoteCollection.items[0]);
        setJewelleryGallery(data.jewelleryGalleryCollection.items[0]);
        setQuoteTravel(data.quoteCollection.items[1]);
        setTravelPage(data.travelPageCollection.items[0]);
        setQuoteFinance(data.quoteCollection.items[2]);
        setTechniqueGallery(data.techniqueGalleryCollection.items[0]);
        setLifeStory(data.lifestoryCollection.items[0]);
        setCta(data.ctaCollection.items[0]);
        setAboutAuthor(data.aboutAuthorCollection.items[0]);
        setFooter(data.footerCollection.items[0]);
      });
  }, []);

  if (!hero) {
    return "Loading...";
  }
  return (
    <div className="wrapper-scroll">
      <SignUp />
      <HeroPage hero={hero} />
      <HistoryQuote quoteHistory={quoteHistory} />
      <JewelleryGallery jewelleryGallery={jewelleryGallery} />
      <TravelQuote quoteTravel={quoteTravel} />
      <TravelPage travelPage={travelPage} />
      <FinanceQuote quoteFinance={quoteFinance} />
      <TechniqueGallery techniqueGallery={techniqueGallery} />
      <LifeStory lifeStory={lifeStory} />
      <Video />
      <Cta cta={cta} />
      <AboutAuthor aboutAuthor={aboutAuthor} />
      <Footer footer={footer} />
    </div>
  );
};

export default StartPage;
