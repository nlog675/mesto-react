import React from "react";

function PopupWithForm({name, title, children, buttonDefaultText, isOpen, onClose}) {
  return(
    <div className={`popup popup-${name} ${isOpen && "popup_isOpen"}`}>
          <div className="popup__content">
              <button onClick={onClose} type="button" className="popup__close"></button>
              <h2 className="popup__title">
                  {title}
              </h2>
              <form name={`${name}`} className="popup__form" noValidate>
                  {children}
                  <button type="submit" className="popup__button">{`${buttonDefaultText}`}</button>
              </form>
          </div>
      </div>
  )
}

export default PopupWithForm;