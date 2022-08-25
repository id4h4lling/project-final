import React, { useEffect, useRef, useState } from "react";
import quoteYellowStart from "icons/quoteYellowStart.svg";
import quoteYellowEnd from "icons/quoteYellowEnd.svg";
import { QuoteBackground } from "theme/ReusableStyle";

export const HistoryQuote = ({ quoteHistory }) => {
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
  }, [quoteHistory]);

  useEffect(() => {
    if (visible) {
      if (index < quoteHistory.quote.length) {
        setTimeout(() => {
          setIndex(index + 1);
        }, 90);
      }
    }
  }, [index, visible]);

  return (
    <div className="scroll-center">
      <QuoteBackground id="history-quote">
        <p ref={myRef}>
          {<img className="signTop" src={quoteYellowStart} alt="quotesign" />}{" "}
          <span className="flashin">
            {quoteHistory.quote.substring(0, index)}
          </span>
          {index >= quoteHistory.quote.length - 1 && (
            <img className="signDown" src={quoteYellowEnd} alt="quotesign" />
          )}
        </p>
      </QuoteBackground>
    </div>
  );
};
