import React, { useContext, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "./contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (currentUser.name && currentUser.about) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser]); 

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return(
    <PopupWithForm 
      name={"edit"} 
      title={"Редактировать профиль"} 
      isOpen={isOpen} 
      onClose={onClose} 
      buttonDefaultText={"Сохранить"}
      onSubmit={handleSubmit}
    >
      <label htmlFor="" className="popup__form-label">
                      <input value={name} onChange={handleNameChange} id="name" name="name" type="text" className="popup__input popup__input-name" placeholder="Имя" minLength="2" maxLength="40" required />
                      <span id="error-name" className="popup__error name-error"></span>
                  </label>
                  <label htmlFor="" className="popup__form-label">
                      <input value={description} onChange={handleDescriptionChange} id="bio" name="about" type="text" className="popup__input popup__input-about" placeholder="О себе" minLength="2" maxLength="200" required />
                      <span id="error-bio" className="popup__error bio-error"></span>
                  </label>
    </PopupWithForm>
  )
}

export default EditProfilePopup;