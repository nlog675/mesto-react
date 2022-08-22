import { useEffect, useState } from 'react';
import { api } from '../utils/api';
import Card from './Card';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([api.getProfile(), api.getCard()])
            .then(([user, data]) => {
                setUserName(user.name);
                setUserDescription(user.about);
                setUserAvatar(user.avatar);
                setCards(data);
            })
            .catch((err) => console.log(err))
    }, []);

    return(
        <main className="content">
            <section className="profile">
                <button onClick={onEditAvatar} className="profile__button-change-avatar"></button>
                <div style={{ backgroundImage: `url(${userAvatar})` }} className="profile__avatar" />
                <div className="profile__info">
                    <div className="profile__container">
                        <h1 className="profile__name">{userName}</h1>
                        <button onClick={onEditProfile} type="button" className="profile__edit-button"></button>
                    </div>
                    <h2 className="profile__description">{userDescription}</h2>
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
                            />
                        )
                    })}
                </ul>
            </section>
        </main>
    )
}

export default Main;