import React, { useEffect, useRef, useState } from "react";
import quoteYellowStart from "icons/quoteYellowStart.svg";
import quoteYellowEnd from "icons/quoteYellowEnd.svg";
import { QuoteBackground } from "theme/ReusableStyle";

export const TravelQuote = ({ quoteTravel }) => {
  const [index, setIndex] = useState(0);
  const myRef = useRef();
  const [visible, setVisble] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisble(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);

  useEffect(() => {
    setIndex(0);
  }, [quoteTravel]);

  useEffect(() => {
    if (visible) {
      if (index < quoteTravel.quote.length) {
        setTimeout(() => {
          setIndex(index + 1);
        }, 50);
      }
    }
  }, [index, visible]);
  return (
    <div className="scroll-center">
      <QuoteBackground>
        <p ref={myRef}>
          {<img className="signTop" src={quoteYellowStart} alt="quotesign" />}{" "}
          <span className="flashinBorder">
            {quoteTravel.quote.substring(0, index)}
          </span>
          {index >= quoteTravel.quote.length - 1 && (
            <img className="signDown" src={quoteYellowEnd} alt="quotesign" />
          )}
        </p>
      </QuoteBackground>
    </div>
  );
};
