import styled from "styled-components";
import ScrollIntoView from "react-scroll-into-view";
const Wrapper = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const ArrowDown = styled.div`
  .span {
    display: block;
    width: 20px;
    height: 20px;
    border-bottom: 5px solid #edbe44;
    border-right: 5px solid #edbe44;
    transform: rotate(45deg);
    margin: -10px;
    animation: animate 3s infinite;
  }
  .arrow span:nth-child(2) {
    animation-delay: -0.2s;
  }
  .arrow span:nth-child(3) {
    animation-delay: -0.4s;
  }
  @keyframes animate {
    0% {
      opacity: 0;
      transform: rotate(45deg) translate(-20px, -20px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(45deg) translate(20px, 20px);
    }
  }
`;
export const Arrow = () => {
  return (
    <Wrapper>
      <ScrollIntoView selector="#history-quote">
        <ArrowDown className="arrow">
          <div className="span"></div>
          <div className="span"></div>
        </ArrowDown>
      </ScrollIntoView>
    </Wrapper>
  );
};
