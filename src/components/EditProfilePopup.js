import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  return(
    <PopupWithForm name={"edit"} title={"Редактировать профиль"} isOpen={props.isOpen} onClose={props.onClose}>
      <label htmlFor="" className="popup__form-label">
                      <input id="name" name="name" type="text" className="popup__input popup__input-name" placeholder="Имя" minLength="2" maxLength="40" required />
                      <span id="error-name" className="popup__error name-error"></span>
                  </label>
                  <label htmlFor="" className="popup__form-label">
                      <input id="bio" name="about" type="text" className="popup__input popup__input-about" placeholder="О себе" minLength="2" maxLength="200" required />
                      <span id="error-bio" className="popup__error bio-error"></span>
                  </label>
    </PopupWithForm>
  )
}

export default EditProfilePopup;