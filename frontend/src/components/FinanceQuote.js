import React, { useEffect, useRef, useState } from "react";
import quoteYellowStart from "icons/quoteYellowStart.svg";
import quoteYellowEnd from "icons/quoteYellowEnd.svg";
import { QuoteBackground } from "theme/reusable";

export const FinanceQuote = ({ quoteFinance }) => {
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
  }, [quoteFinance]);

  useEffect(() => {
    if (visible) {
      if (index < quoteFinance.quote.length) {
        setTimeout(() => {
          setIndex(index + 1);
        }, 90);
      }
    }
  }, [index, visible]);

  return (
    <div className="scroll">
      <QuoteBackground>
        <p ref={myRef}>
          {<img className="signTop" src={quoteYellowStart} alt="quotesign" />}{" "}
          <span className="flashinBorder">
            {quoteFinance.quote.substring(0, index)}
          </span>
          {index >= quoteFinance.quote.length - 1 && (
            <img className="signDown" src={quoteYellowEnd} alt="quotesign" />
          )}
        </p>
      </QuoteBackground>
    </div>
  );
};
