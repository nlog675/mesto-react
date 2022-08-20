import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import { findAllByTestId } from '@testing-library/react';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    };

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    };

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }; 

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false)
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
    }

  return (
    <div className="page">
      
      <Header />

      <Main 
        onEditAvatar = {handleEditAvatarClick}
        onEditProfile = {handleEditProfileClick}
        onAddPlace = {handleAddPlaceClick}
      />

      <Footer />

      <EditProfilePopup 
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />

      <AddPlacePopup 
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />
      
      <EditAvatarPopup 
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />

      <ImagePopup />

      

      <div className="popup popup-delete">
          <div className="popup__content-delete">
              <button type="button" className="popup__close popup__close-add"></button>
              <h2 className="popup__title">
                  Вы уверены?
              </h2>
              <form name="card-delete-form" className="popup__form">
                  <button type="submit" className="popup__button popup__card-del-btn">
                      Да
                  </button>
              </form>
          </div>
      </div>

      <template id="card" className="template-item">
          <li className="elements__item">
              <button type="button" className="elements__card-delete"></button>
              <img className="elements__item-image" />
              <div className="elements__card-info">
                  <h2 className="elements__card-heading"></h2>
                  <div>
                      <button type="button" className="elements__card-like"></button>
                      <div className="elements__card-like-counter"></div>
                  </div>
              </div>
          </li>
      </template>
    </div>
  );
}

export default App;
