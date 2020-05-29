import React from 'react';

import CardInfo from './cardInfo';

function Card(props) {
  return (
    <div
      className="d-inline-block c-card col-sm-10 col-md-auto"
      onClick={(e) => props.click(props.item)}
    >
      <div
        style={{ backgroundColor: props.item.imgBG }}
        className="c-card-image-container d-flex justify-content-around align-items-center"
      >
        <img
          className="c-card-image"
          src={props.item.imgSrc}
          alt={props.item.imgSrc}
        />
      </div>

      {props.item.selected && (
        <CardInfo
          title={props.item.title}
          subTitle={props.item.subTitle}
          link={props.item.link}
          linkText={props.item.linkText}
        />
      )}
    </div>
  );
}

export default Card;
