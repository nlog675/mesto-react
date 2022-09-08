import { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import ConfirmationPopup from './ConfirmationPopup';
import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [currentUser, setCurrentUser] = useState({});
    const [cards, setCards] = useState([]);
    const [cardForDelete, setCardForDelete] = useState(null);

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
          setCards((state) => state.filter((c) => c._id !== card._id));
          closeAllPopups()
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

    function handleConfirmationClick(card) {
      setCardForDelete(card)
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

    function handleUpdateAvatar(data) {
      api.changeAvatar(data)
        .then((res) => {
          setCurrentUser(res);
          closeAllPopups();
        })
        .catch((err) => console.log(err))
    }

    function handleAddPlaceSubmit(data) {
      api.addCard(data)
        .then((newCard) => {
          setCards([newCard, ...cards]);
          closeAllPopups()
        })
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard(null);
        setCardForDelete(null);
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
          onCardDelete={handleConfirmationClick}
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
          onAddPlace={handleAddPlaceSubmit}
        />
        
        <EditAvatarPopup 
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <ImagePopup 
          card={selectedCard}
          onClose={closeAllPopups}
        />

        <ConfirmationPopup
          onClose={closeAllPopups}
          onConfirm={handleCardDelete}
          card={cardForDelete}
        />
        
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
