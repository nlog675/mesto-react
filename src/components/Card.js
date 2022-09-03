import { useContext } from "react";
import { CurrentUserContext } from "./contexts/CurrentUserContext";

function Card({card, onClick}) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
  );
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `elements__card-like ${isLiked ? 'elements__card-like_active' : 'elements__card-like'}`
  );

  function handleClick() {
    onClick(card)
  }

  return(
    <li className="elements__item">
      <button type="button" className={cardDeleteButtonClassName}></button>
      <div onClick={handleClick} style={{ backgroundImage: `url(${card.link})` }} className="elements__item-image" />
      <div className="elements__card-info">
        <h2 className="elements__card-heading">{card.name}</h2>
        <div>
          <button type="button" className={cardLikeButtonClassName}></button>
          <div className="elements__card-like-counter">{card.likes.length}</div>
        </div>
      </div>
    </li>
  )
}

export default Card