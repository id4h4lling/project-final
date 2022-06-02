import React from "react";
import { useState, useEffect } from "react";

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
  const [page, setPage] = useState(null);
  const [newpage, setnewPage] = useState(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/###`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: "Bearer #####",
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
        setPage(data.quoteCollection.items[0]);
        setnewPage(data.heroCollection.items[0]);
      });
  }, []);

  if (!page) {
    return "Loading...";
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>{page.quote}</p>
        <p>{newpage.topheading}</p>
        <p>{newpage.mainHeader}</p>
        <p>{newpage.subheading}</p>
        <img src={newpage.heroimage.url} className="App-logo" alt="logo" />
      </header>
    </div>
  );
};

export default StartPage;
