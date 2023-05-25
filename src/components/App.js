// import React from "react";
import { useState } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js"
import Main from "./Main.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditProfileClick() {
    console.log("открыт попап1");
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    console.log("открыт попап2");
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    console.log("открыт попап3");
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    console.log("закрыт попап");
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  function handleCardClick(card) {
    console.log("попап картинка");
    setSelectedCard(card);
  }

  function submitForm(evt) {
    evt.preventDefault();
    closeAllPopups();
  }

  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name="edit-profile"
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
        </PopupWithForm>
        <PopupWithForm
          name="cards"
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
          name="confirm"
          form="form-confirm"
          title="Вы уверены?"
          buttonText="Да"
        ></PopupWithForm>
        <PopupWithForm
          name="avatar"
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
        </PopupWithForm>
        <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
        />
      </div>
    </div>
  );
}

export default App;
