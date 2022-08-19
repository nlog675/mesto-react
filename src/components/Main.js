import React from 'react';
import avatar from '../images/avatar.jpg';

function Main({onEditProfile, onAddPlace, onEditAvatar}) {


    return(
        <main className="content">
            <section className="profile">
                <button onClick={onEditAvatar} className="profile__button-change-avatar"></button>
                <img src={avatar} alt="Аватар автора" className="profile__avatar" />
                <div className="profile__info">
                    <div className="profile__container">
                        <h1 className="profile__name">Жак-Ив Кусто</h1>
                        <button onClick={onEditProfile} type="button" className="profile__edit-button"></button>
                    </div>
                    <h2 className="profile__description">Исследователь океана</h2>
                </div>
                <button onClick={onAddPlace} type="button" className="profile__add-button"></button>
            </section>
            
            <section className="elements">
                <ul className="elements__list">
    
                </ul>
            </section>
        </main>
    )
}

export default Main;