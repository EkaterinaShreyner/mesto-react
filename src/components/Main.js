// import React from "react";
import { useEffect, useState } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([dataUser, cards]) => {
        setUserName(dataUser.name);
        setUserDescription(dataUser.about);
        setUserAvatar(dataUser.avatar);
        setCards(cards);
      })
      .catch((err) => {
        console.error(`Ошибка ${err}`);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__pen">
          <img
            className="profile__avatar"
            src={userAvatar}
            alt="Аватар"
            onClick={props.onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <div className="profile__header">
            <h1 className="profile__title">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать профиль"
              onClick={props.onEditProfile}
            >
            </button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить место"
          onClick={props.onAddPlace}
        >
        </button>
      </section>
      <div className="elements">
        {cards.map((card) => (
          <Card
          key={card._id}
          card={card}
          onCardClick={props.onCardClick}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
