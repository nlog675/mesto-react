import React from "react";

function Card(props) {
  return(
    <li className="elements__item">
      <button type="button" className="elements__card-delete"></button>
      <div style={{ backgroundImage: `url(${props.card.link})` }} className="elements__item-image" />
      <div className="elements__card-info">
        <h2 className="elements__card-heading">{props.card.name}</h2>
        <div>
          <button type="button" className="elements__card-like"></button>
          <div className="elements__card-like-counter">{props.card.likes.length}</div>
        </div>
      </div>
    </li>
  )
}

export default Card