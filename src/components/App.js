import { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import { findAllByTestId } from '@testing-library/react';
import { api } from '../utils/api';
import { CurrentUserContext } from './contexts/CurrentUserContext';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [currentUser, setCurrentUser] = useState({});
    const [cards, setCards] = useState([]);

    useEffect(() => {
      Promise.all([api.getProfile(), api.getCard()])
          .then(([user, data]) => {
              setCurrentUser(user)
              setCards(data);
          })
          .catch((err) => console.log(err))
  }, []);

    function handleCardLike(card) {
      const isLiked = card.likes.some(i => i._id === currentUser._id);
      
      if (!isLiked) {
        api.likeCard(card._id)
          .then((res) => {
            setCards((state) => state.map((c) => c._id === card._id ? res : c));
          })
          .catch((err) => console.log(err))
      } else {
        api.dislikeCard(card._id)
          .then((res) => {
            setCards((state) => state.map((c) => c._id === card._id ? res : c));
          })
          .catch((err) => console.log(err))
      }
    }

    function handleCardDelete(card) {
      api.deleteCard(card._id)
        .then((res) => {
          setCards((state) => state.filter((c) => c._id !== card._id ? res : c));
        })
        .catch((err) => console.log(err))
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    };

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    };

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }; 

    function handleCardClick(card) {
        setSelectedCard(card)
    };

    function handleUpdateUser(data) {
      api.editProfile(data)
        .then((res) => {
          setCurrentUser(res);
          closeAllPopups();
        })
        .catch((err) => console.log(err))
  
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard(null);
    };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        
        <Header />

        <Main 
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />

        <Footer />

        <EditProfilePopup 
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <AddPlacePopup 
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />
        
        <EditAvatarPopup 
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />

        <ImagePopup 
          card={selectedCard}
          onClose={closeAllPopups}
        />

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
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
