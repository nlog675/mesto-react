import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose}) {
  return(
    <PopupWithForm name={"add"} title={"Новое место"} isOpen={isOpen} onClose={onClose} buttonDefaultText={"Создать"}>
      <label htmlFor="" className="popup__form-label">
                      <input id="place-name" name="name" type="text" className="popup__input popup__input-place-name" placeholder="Название" minLength="2" maxLength="30" required />
                      <span id="error-place-name" className="popup__error place-name-error"></span>
                  </label>
                  <label htmlFor="" className="popup__form-label">
                      <input id="place-link" name="link" type="url" className="popup__input popup__input-place-link" placeholder="Ссылка на картинку" required />
                      <span id="error-place-link" className="popup__error place-link-error"></span>
                  </label>
    </PopupWithForm>
  )
}

export default AddPlacePopup;