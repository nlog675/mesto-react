import React from "react";

function Card({card, onClick}) {

  function handleClick() {
    onClick(card)
  }

  return(
    <li className="elements__item">
      <button type="button" className="elements__card-delete"></button>
      <div onClick={handleClick} style={{ backgroundImage: `url(${card.link})` }} className="elements__item-image" />
      <div className="elements__card-info">
        <h2 className="elements__card-heading">{card.name}</h2>
        <div>
          <button type="button" className="elements__card-like"></button>
          <div className="elements__card-like-counter">{card.likes.length}</div>
        </div>
      </div>
    </li>
  )
}

export default Card