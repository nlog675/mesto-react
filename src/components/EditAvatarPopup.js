import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose}) {
  return(
    <PopupWithForm name={"avatar"} title={"Обновить аватар"} isOpen={isOpen} onClose={onClose} buttonDefaultText={"Сохранить"}>
      <label htmlFor="" className="popup__form-label">
        <input id="avatar-url" name="link" type="url" className="popup__input popup__input-avatar" placeholder="Ссылка на аватар" required />
        <span id="error-avatar" className="popup__error avatar-url-error" />
      </label>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;