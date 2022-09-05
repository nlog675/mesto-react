import { useEffect, useState, useContext } from 'react';
import { api } from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from './contexts/CurrentUserContext';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardLike, cards}) {
    // const [cards, setCards] = useState([]);
    const currentUser = useContext(CurrentUserContext);

    // function handleCardLike(card) {
    //     const isLiked = card.likes.some(i => i._id === currentUser._id);
        
    //     api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
    //         setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    //     });
    // }

    // useEffect(() => {
    //     Promise.all([api.getCard()])
    //         .then(([data]) => {
    //             setCards(data);
    //         })
    //         .catch((err) => console.log(err))
    // }, []);

    return(
        <main className="content">
            <section className="profile">
                <button onClick={onEditAvatar} className="profile__button-change-avatar"></button>
                <div style={{ backgroundImage: `url(${currentUser.avatar})` }} className="profile__avatar" />
                <div className="profile__info">
                    <div className="profile__container">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button onClick={onEditProfile} type="button" className="profile__edit-button"></button>
                    </div>
                    <h2 className="profile__description">{currentUser.about}</h2>
                </div>
                <button onClick={onAddPlace} type="button" className="profile__add-button"></button>
            </section>
            
            <section className="elements">
                <ul className="elements__list">
                    {cards.map((data) => {
                        return(
                            <Card 
                            key={data._id}
                            card={data}
                            onClick={onCardClick}
                            onCardLike={onCardLike}
                            />
                        )
                    })}
                </ul>
            </section>
        </main>
    )
}

export default Main;