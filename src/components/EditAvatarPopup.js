import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  return(
    <PopupWithForm name={"avatar"} title={"Обновить аватар"} isOpen={props.isOpen} onClose={props.onClose}>
      <label htmlFor="" className="popup__form-label">
                      <input id="avatar-url" name="link" type="url" className="popup__input popup__input-avatar" placeholder="Ссылка на аватар" required />
                      <span id="error-avatar" className="popup__error avatar-url-error"></span>
                  </label>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;