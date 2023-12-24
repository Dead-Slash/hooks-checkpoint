import React from "react";

const Rating = (props) => {
  const { rate, setRate } = props;
  const stars = (star) => {
    const starTab = [];
    for (let i = 0; i < 5; i++) {
      if (i < star) {
        starTab.push(
          <span
            key={i}
            className="fs-2"
            style={style}
            onClick={() => setRate(i + 1)}
          >
            &#9733;
          </span>
        );
      } else {
        starTab.push(
          <span
            key={i}
            className="fs-2"
            style={style}
            onClick={() => setRate(i + 1)}
          >
            &#9734;
          </span>
        );
      }
    }
    return starTab;
  };
  return <div> {stars(rate)} </div>;
};

Rating.defaultProps = {
  setRate: () => {},
};

const style = {
  color: "rgb(245,164, 66)",
  pointer: "pointer",
  marginLeft: 30,
};

export default Rating;
