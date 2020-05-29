import React from 'react';

import { useSpring, animated } from 'react-spring';

function CardInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="c-card-info" style={style}>
      <p className="c-card-title">{props.title}</p>
      <p className="c-card-subtitle">{props.subTitle}</p>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {props.linkText}
      </a>
    </animated.div>
  );
}

export default CardInfo;
