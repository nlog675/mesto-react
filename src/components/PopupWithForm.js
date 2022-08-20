import React from "react";

function PopupWithForm(props) {
  return(
    <div className={`popup popup-${props.name} ${props.isOpen ? "popup_isOpen" : ""}`}>
          <div className="popup__content">
              <button onClick={props.onClose} type="button" className="popup__close"></button>
              <h2 className="popup__title">
                  {props.title}
              </h2>
              <form name={`${props.name}`} className="popup__form" noValidate>
                  {props.children}
                  <button type="submit" className="popup__button"></button>
              </form>
          </div>
      </div>
  )
}

export default PopupWithForm;