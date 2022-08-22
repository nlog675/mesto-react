import React from 'react';
import { api } from '../utils/api';
import Card from './Card';

function Main(props) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
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
                <button onClick={props.onEditAvatar} className="profile__button-change-avatar"></button>
                <div style={{ backgroundImage: `url(${userAvatar})` }} className="profile__avatar" />
                <div className="profile__info">
                    <div className="profile__container">
                        <h1 className="profile__name">{userName}</h1>
                        <button onClick={props.onEditProfile} type="button" className="profile__edit-button"></button>
                    </div>
                    <h2 className="profile__description">{userDescription}</h2>
                </div>
                <button onClick={props.onAddPlace} type="button" className="profile__add-button"></button>
            </section>
            
            <section className="elements">
                <ul className="elements__list">
                    {cards.map((data) => {
                        return(
                            <Card 
                            key={data._id}
                            card={data}
                            onClick={props.onCardClick}
                            />
                        )
                    })}
                </ul>
            </section>
        </main>
    )
}

export default Main;