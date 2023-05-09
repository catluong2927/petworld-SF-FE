import React, { useEffect, useRef, useState } from "react";
import MorphPhrase from "./MorphPhrase";

const Morphext = ({
  animation = "bounceInRight",
  speed = 2000,
  ...restProps
}) => {
  const [indexState, setIndexState] = useState(0);
  const indexRef = useRef(0); //To keep the index into the SetInterval
  const intervals = [];

  useEffect(() => {
    if (restProps.phrases.length < 2) {
      return false;
    }
    startInterval(speed);

    return () => {
      intervals.map(clearInterval);
    };
  });

  const startInterval = (milliseconds) => {
    intervals.push(
      setInterval(() => {
        if (indexRef.current + 1 === restProps.phrases.length) {
          indexRef.current = -1;
          setIndexState(indexRef.current);
        }
        indexRef.current += 1;
        setIndexState(indexRef.current);
      }, milliseconds)
    );
  };

  const renderPhrases = restProps.phrases.map((text, id) => {
    return (
      <MorphPhrase
        key={id}
        phrase={text}
        animation={animation}
        active={id === indexState}
      />
    );
  });

  return <div className="morphext">{renderPhrases}</div>;
};

export default Morphext;
