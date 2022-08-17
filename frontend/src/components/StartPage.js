import React from "react";
import { useState, useEffect } from "react";
import { SignUp } from "./SignUp";
import { Navbar } from "./Navbar";
import { HeroPage } from "./HeroPage";
import { HistoryQuote } from "./HistoryQuote";
import { JewelleryGallery } from "./JewelleryGallery";
import { TravelPage } from "./TravelPage";
import { TravelQuote } from "./TravelQuote";
import { TechniqueGallery } from "./TechniqueGallery";
import { FinanceQuote } from "./FinanceQuote";
import { Video } from "./Video";
import { Cta } from "./Cta";
import { LifeStory } from "./LifeStory";
import { AboutAuthor } from "./AboutAuthor";
import { Footer } from "./Footer";
import { CtaButton } from "./CtaButton";

const ID = process.env.REACT_APP_SPACE_ID;
const TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

const query = `
{  
  heroCollection (limit:1){
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
      pictureCollection(limit: 10) {
        items {
          title
          url
        }
      }
    }
  }

  lifestoryCollection(limit:1){items{title, picture,{
    title
    description
    contentType
    fileName
    size
    url
    width
    height
  },
  text{json
  links{entries{inline{sys{id}__typename
  ... on Lifestory{title}}}}}}}

  ctaCollection(limit: 1) {
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

  aboutAuthorCollection(limit: 1) {
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
  }
`;

const StartPage = () => {
  const [sidebar, setSidebar] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const showSidebar = () => {
    setSidebar(true);
    document.getElementById("overlay").style.display = "block";
  };
  const hideSidebar = () => {
    setSidebar(false);
    document.getElementById("overlay").style.display = "none";
    setShowThankYou(false);
  };

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
        setQuoteHistory(data.quoteCollection.items[2]);
        setJewelleryGallery(data.jewelleryGalleryCollection.items[0]);
        setQuoteTravel(data.quoteCollection.items[1]);
        setTravelPage(data.travelPageCollection.items[0]);
        setQuoteFinance(data.quoteCollection.items[0]);
        setTechniqueGallery(data.techniqueGalleryCollection.items[0]);
        setLifeStory(data.lifestoryCollection.items[0]);
        setCta(data.ctaCollection.items[0]);
        setAboutAuthor(data.aboutAuthorCollection.items[0]);
      });
  }, []);

  if (!hero) {
    return "Loading...";
  }
  return (
    <div className="wrapper-scroll">
      <Navbar />
      <CtaButton showSidebar={showSidebar} />

      <SignUp
        setSidebar={setSidebar}
        sidebar={sidebar}
        showSidebar={showSidebar}
        hideSidebar={hideSidebar}
        setShowThankYou={setShowThankYou}
        showThankYou={showThankYou}
      />
      <HeroPage hero={hero} showSidebar={showSidebar} />
      <HistoryQuote quoteHistory={quoteHistory} showSidebar={showSidebar} />
      <JewelleryGallery
        jewelleryGallery={jewelleryGallery}
        showSidebar={showSidebar}
      />
      <TravelQuote quoteTravel={quoteTravel} showSidebar={showSidebar} />
      <TravelPage travelPage={travelPage} showSidebar={showSidebar} />
      <FinanceQuote quoteFinance={quoteFinance} showSidebar={showSidebar} />
      <TechniqueGallery
        techniqueGallery={techniqueGallery}
        showSidebar={showSidebar}
      />
      <Video showSidebar={showSidebar} />
      <LifeStory lifeStory={lifeStory} showSidebar={showSidebar} />
      <Cta
        cta={cta}
        sidebar={sidebar}
        showSidebar={showSidebar}
        hideSidebar={hideSidebar}
      />
      <AboutAuthor aboutAuthor={aboutAuthor} showSidebar={showSidebar} />
      <Footer />
    </div>
  );
};

export default StartPage;
