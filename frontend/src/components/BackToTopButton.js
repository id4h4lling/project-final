import React from "react";
import { useEffect, useState } from "react";

export const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="BackToTop">
      {backToTopButton && (
        <button
          style={{
            position: "fixed",
            zIndex: 4,
            bottom: "50px",
            right: "50px",
            height: "50px",
            width: "50px",
            fontSize: "40px",
          }}
          onClick={scrollUp}
        >
          Back to top
        </button>
      )}
    </div>
  );
};
