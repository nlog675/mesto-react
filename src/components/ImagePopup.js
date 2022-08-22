import React from "react";

function ImagePopup(props) {
  return(
    <div className={`popup popup-picture ${props.card ? "popup_isOpen" : ""}`}>
          <div className="popup__content-picture">
              <figure className="popup__figure">
                  <img src={props.card ? props.card.link : ''} alt={props.card ? props.card.name : ''} className="popup__image" />
                  <figcaption className="popup__caption">{props.card ? props.card.name : ''}</figcaption>
              </figure>
              <button onClick={props.onClose} type="button" className="popup__close popup__close-pic"></button>
          </div>
      </div>
  )
}

export default ImagePopup;