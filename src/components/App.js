// import React from "react";
import { useEffect, useState } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import api from "../utils/Api.js";
import EditProfilePopup from "./EditProfilePopup.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then((dataUser) => {
        // console.log(dataUser);
        setCurrentUser(dataUser);
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`)
      })
  }, []);

  // useEffect(() => {
  //   Promise.all([api.getUserInfo(), api.getCards()])
  //     .then(([dataUser, cards]) => {
  //       // console.log(dataUser);
  //       // console.log(cards);
  //       setCurrentUser(dataUser);
  //       setCards(cards);
  //     })
  //     .catch((err) => {
  //       console.error(`Ошибка ${err}`);
  //     });
  // }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser(dataUser) {
    api.patchUserInfo(dataUser)
      .then((dataUser) => {
        setCurrentUser(dataUser)
        closeAllPopups();
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`)
      })
  }
 

  return (
    <div className="root">
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          {/* <PopupWithForm
            form="form-edit-profile"
            title="Редактировать профиль"
            buttonText="Сохранить"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onSubmit={submitForm}
          >
            <input
              className="popup__input popup__input_type_name"
              name="name"
              type="text"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              id="profile-name"
            />
            <span className="popup__input-error profile-name-error"></span>
            <input
              className="popup__input popup__input_type_info"
              name="about"
              type="text"
              placeholder="О себе"
              minLength="2"
              maxLength="200"
              id="profile-info"
            />
            <span className="popup__input-error profile-info-error"></span>
          </PopupWithForm> */}
          {/* <PopupWithForm
            form="form-cards"
            title="Новое место"
            buttonText="Сохранить"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onSubmit={submitForm}
          >
            <input
              className="popup__input popup__input_card_name"
              name="name"
              type="text"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
              id="card-name-input"
            />
            <span className="popup__input-error card-name-input-error"></span>
            <input
              className="popup__input popup__input_card_link"
              name="link"
              type="url"
              placeholder="Ссылка на картинку"
              required
              id="card-link-input"
            />
            <span className="popup__input-error card-link-input-error"></span>
          </PopupWithForm>
          <PopupWithForm
            form="form-confirm"
            title="Вы уверены?"
            buttonText="Да"
          ></PopupWithForm>
          <PopupWithForm
            form="form-avatar"
            title="Обновить аватар"
            buttonText="Сохранить"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onSubmit={submitForm}
          >
            <input
              className="popup__input popup__input_type_avatar-link"
              name="avatar"
              type="url"
              placeholder="Ссылка на аватар"
              required
              id="avatar-link-input"
            />
            <span className="popup__input-error avatar-link-input-error"></span>
          </PopupWithForm> */}
          <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
