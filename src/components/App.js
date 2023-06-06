import { useEffect, useState } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import api from "../utils/Api.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([dataUser, cards]) => {
        // console.log(dataUser);
        // console.log(cards);
        setCurrentUser(dataUser);
        setCards(cards);
      })
      .catch((err) => {
        console.error(`Ошибка ${err}`);
      });
  }, []);

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

  function handleCardLike(card) {

    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((el) => el._id === card._id ? newCard : el))
      })
  }

  function handleCardDelete(card) {
    console.log(card);
    api.deleteCard(card._id)
      .then(() => {
        // setCards((cards) => cards.filter((el) => {
        //   el._id !== card._id
        // }))

        // setCards((cards) => cards.filter((el) => el._id !== card._id))

        const newCards = cards.filter((el) => el._id !== card._id)
        setCards(newCards)
        console.log('delete')
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`)
      })
  }

  function handleUpdateUser(dataUser) {
    // setIsLoading(true)
    api.patchUserInfo(dataUser)
      .then((dataUser) => {
        setCurrentUser({
          name: dataUser.name,
          about: dataUser.about
        })
        closeAllPopups();
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`)
      })
  }

  function handleUpdateAvatar({avatar}) {
    api.patchAvatar({avatar})
      .then((dataUser) => {
        setCurrentUser({
          avatar: dataUser.avatar
        })
        closeAllPopups();
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`)
      })
  }

  function handleAddPlaceSubmit({name, link}) {
    api.postNewCard({name, link})
      .then((newCard) => {
        console.log(newCard)
        setCards([newCard, ...cards])
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
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
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
          <PopupWithForm
            form="form-confirm"
            title="Вы уверены?"
            buttonText="Да"
          ></PopupWithForm>
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
