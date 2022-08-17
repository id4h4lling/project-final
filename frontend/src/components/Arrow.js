import ScrollIntoView from "react-scroll-into-view";
import { ArrowDown, ArrowWrapper } from "theme/styles";

export const Arrow = () => {
  return (
    <ArrowWrapper>
      <ScrollIntoView selector="#history-quote">
        <ArrowDown className="arrow">
          <div className="span"></div>
          <div className="span"></div>
        </ArrowDown>
      </ScrollIntoView>
    </ArrowWrapper>
  );
};
