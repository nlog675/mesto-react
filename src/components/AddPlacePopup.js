import React, { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, onAddPlace}) {
  const [cardName, setCardName] = useState('')
  const [cardLink, setCardLink] = useState('')

  useEffect(() => {
    setCardName(cardName)
    setCardLink(cardLink)
  }, [])
  
  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: cardName,
      link: cardLink
    })
  }

  function handleNameChange(e) {
    setCardName(e.target.value)
  }

  function handleLinkChange(e) {
    setCardLink(e.target.value)
  }

  return(
    <PopupWithForm 
      name={"add"} 
      title={"Новое место"} 
      isOpen={isOpen} 
      onClose={onClose} 
      buttonDefaultText={"Создать"}
      onSubmit={handleSubmit}
    >
      <label 
        htmlFor="" 
        className="popup__form-label"
      >
        <input 
          value={cardName}
          onChange={handleNameChange}
          id="place-name" 
          name="name" 
          type="text" 
          className="popup__input popup__input-place-name" 
          placeholder="Название" 
          minLength="2" 
          maxLength="30" 
          required 
        />
        <span 
          id="error-place-name" 
          className="popup__error place-name-error"
        />
      </label>
      <label 
        htmlFor="" 
        className="popup__form-label"
        >
        <input 
          value={cardLink}
          onChange={handleLinkChange}
          id="place-link" 
          name="link" 
          type="url" 
          className="popup__input popup__input-place-link" 
          placeholder="Ссылка на картинку" 
          required 
        />
        <span 
          id="error-place-link" 
          className="popup__error place-link-error"
          />
      </label>
    </PopupWithForm>
  )
}

export default AddPlacePopup;